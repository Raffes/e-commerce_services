import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user.model';

export interface UserInterface {
    id_uid: string;
    email: string;
    displayName: string;
    emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  userState: any
  id_uid: any

  constructor(
    public angFireDB: AngularFirestore,
    public anFireAuth: AngularFireAuth,
    private act: ActivatedRoute,
    public router: Router,
    public ngZone: NgZone
  ) {
    
    this.anFireAuth.authState.subscribe(user => {
      if(user) {
        this.userState = user
        localStorage.setItem('user', JSON.stringify(this.userState))
        JSON.parse(localStorage.getItem('user') || '{}')
      } else {
        localStorage.setItem('user', '{}')
        JSON.parse(localStorage.getItem('user') || '{}')
      }
    })
  }

    // async signIn(email: string, password: string) {
    //   await this.anFireAuth.signInWithEmailAndPassword(email, password)
    //   .then(res => {
    //     this.isLoggedIn = true
    //     localStorage.setItem('user', JSON.stringify(res.user))
    //   })
    // }

    // async signUp(email: string, password: string) {
    //   await this.anFireAuth.createUserWithEmailAndPassword(email, password)
    //   .then(res => {
    //     this.isLoggedIn = true
    //     localStorage.setItem('user', JSON.stringify(res.user))
    //   })
    // }

    // logout() {
    //   this.anFireAuth.signOut()
    //   localStorage.removeItem("user")
    // }




   async SignIn(email: string, password: string) {
      // return this.anFireAuth.createUserWithEmailAndPassword(email, password)
      // .then((result) => {
      //   this.ngZone.run(() => {
      //     console.log("dsfhsdjkfhsdajkfhsakjdfhksajdfhksajdfhkjsadhfkjsadhfkjsadh")
      //   const id_uid = result.user?.uid
      //   console.log(result.user?.uid)
      //   console.log(id_uid)
      //     this.router.navigate([`home/${result.user?.uid}`])
      //   })
        
      // }).catch((error) => {
      //   window.alert(error.message)
      // })

     try {
       const result = await this.anFireAuth.signInWithEmailAndPassword(email, password);
       this.ngZone.run(() => {

        // const id_user = this.act.snapshot.paramMap.get('id_user')
        // console.log(this.userService.getUserDoc(id_user))

        console.log("dsfhsdjkfhsdajkfhsakjdfhksajdfhksajdfhkjsadhfkjsadhfkjsadh")
        const id_uid = result.user?.uid
        console.log(result.user?.uid)
        console.log(id_uid)
         this.router.navigate([`home/${id_uid}`]);
       });
      //  this.UserData(result.user, null)

     } catch (error) {
       console.log(error.message);
     }


   }

   async SignUp(user: User) {
     try {
       const result = await this.anFireAuth.createUserWithEmailAndPassword(user.email, user.password);
      //  this.SendVerificationMail();

     

      //  result.user?.updateProfile({displayName: user.displayName})
       console.log(result.user?.displayName)
       console.log(result.user?.uid)

      //  this.SetUserData(result.user?.uid, user);
       this.UserData(result.user, user)
     } catch (error) {
       window.alert(error.message);
     }
   }

   SendVerificationMail() {
     return this.anFireAuth.currentUser.then(u => u?.sendEmailVerification())
     .then(() => {
       this.router.navigate(['verify-email'])
     })
   }

   async ForgotPassword(passwordResetEmail: any) {
     try {
       await this.anFireAuth.sendPasswordResetEmail(passwordResetEmail);
       window.alert('Verifique seu email para alterar sua senha');
     } catch (error) {
       console.log(error.message);
     }
   }

   get isLoggedIn(): boolean {
     const user = JSON.parse(localStorage.getItem('user') || '{}')
     console.log(user)
     return (user !== null && user.emailVerified === false) ? true : false
   }

  //  GoogleAuth() {
  //    return this.AuthLogin(new auth.GoogleAuthProvider())
  //  }

  //  async AuthLogin(provider: any) {
  //    try {
  //      const result = await this.anFireAuth.signInWithPopup(provider);
  //      this.ngZone.run(() => {
  //        this.router.navigate(['']);
  //      });
  //      this.SetUserData(result.user);
  //    } catch (error) {
  //      console.log(error.message);
  //    }
  //  }

   async SetUserData(id_uid: any, user: User) {

     this.angFireDB.collection("user-colletion").doc(id_uid).set(user)
     
     this.angFireDB.collection("user-colletion").doc(id_uid).update({
      "id_uid": id_uid
    }).then(() => {
      console.log("Document successfully updated!");
    });
    
   }

   async UserData(user: any, userData: any) {

    const userRef: AngularFirestoreDocument<any> = this.angFireDB.doc(`user-colletion/${user.uid}`);
    
    this.userState = {
        id_uid: user.uid,
        email: user.email,
        displayName: userData.displayName,
        emailVerified: user.emailVerified
      }
      userRef.set(this.userState, {
        merge: true
      })

      this.angFireDB.collection("user-colletion").doc(user.uid).update({
        "displayName": userData.displayName,
        "lastname": userData.lastname,
        "cpf": userData.cpf,
        "phoneNumber": userData.phoneNumber,
        "password": userData.password
      }).then(() => {
        console.log("Document successfully updated!");
      });
     
   }

   async SignOut() {
     await this.anFireAuth.signOut().then(() => {
      localStorage.removeItem('user')
      this.router.navigate(['login'])
     })
     
     
   }


}
