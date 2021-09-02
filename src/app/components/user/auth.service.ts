import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthUserService } from './auth-user.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private angFireDB: AngularFirestore, private anFireAuth: AuthUserService) { }


  getUserDoc(id_user: any) {
    return this.angFireDB
    .collection("user-colletion")
    .doc(id_user)
    .valueChanges()

  }

  getUserListId(id_uid: any) {
    return this.angFireDB.collection<User>("user-colletion").doc(id_uid).snapshotChanges()
    
  }

  getUserList() {
    return this.angFireDB
    .collection<User>("user-colletion")
    .snapshotChanges()

  }
  
  async createUser(user: User) {
    // try {
    //   const docRef = await this.angFireDB.collection("user-colletion").add(user);

    //   const userId = this.angFireDB.collection("user-colletion").doc(docRef.id).update({
    //     "id_user": docRef.id, "id_uid": this.anFireAuth.id_uid
    //   }).then(() => {
    //     console.log("Document successfully updated!");
    //   });

    //   console.log("Documento escrito com id: ", docRef.id);

    // } catch (error) {
    //   console.error("Error em criar usuário: ", error);
    // } 
  }


  deleteUser(user: User) {
    return this.angFireDB
    .collection("user-colletion")
    .doc(String(user.id_uid))
    .delete()
    // .doc(String(user.id_user))
  }

  updateUser(user: User, id_user: any) {
    return this.angFireDB
    .collection("user-colletion")
    .doc(id_user)
    .update({
      displayName: user.displayName,
      lastname: user.lastname,
      cpf: user.cpf,
      phoneNumber: user.phoneNumber,
      email: user.email,
      password: user.password,
      cep: user.cep,
      numberHouse: user.numberHouse,
      complement: user.complement,
      referenceHouse: user.referenceHouse
    })
  }


}
