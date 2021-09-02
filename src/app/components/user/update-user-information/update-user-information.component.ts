import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUserService } from '../auth-user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-user-information',
  templateUrl: './update-user-information.component.html',
  styleUrls: ['./update-user-information.component.css']
})
export class UpdateUserInformationComponent implements OnInit {

  public editUserInformation: FormGroup
  userRef: any
  user: any
  id_uid: any;

  constructor(
    public userService: AuthService, 
    public authService : AuthUserService,
    public formBuider: FormBuilder, 
    private act: ActivatedRoute, 
    private router: Router) { 
    
      this.editUserInformation = this.formBuider.group({
        displayName: [""],
        lastname: [""],
        cpf: [""],
        phoneNumber: [""],
        email: [""],
        password: [""],
        cep: [""],
        numberHouse: [""],
        complement: [""],
        referenceHouse: [""]
        
      })
  }

  ngOnInit(): void {
    this.id_uid = this.act.snapshot.paramMap.get('id_uid')
    console.log(this.id_uid)
    this.userService.getUserDoc(this.id_uid).subscribe(res => {
      this.userRef = res
      this.editUserInformation = this.formBuider.group({
        displayName: [this.userRef.displayName],
        lastname: [this.userRef.lastname],
        cpf: [this.userRef.cpf],
        phoneNumber: [this.userRef.phoneNumber],
        email: [this.userRef.email],
        password: [this.userRef.password],
        cep: [this.userRef.cep],
        numberHouse: [this.userRef.numberHouse],
        complement: [this.userRef.complement],
        referenceHouse: [this.userRef.referenceHouse]
      })
      
    })

    this.userService.getUserListId(this.id_uid).subscribe((doc) => {
      if(doc.payload.exists) {
        this.user = doc.payload.data()
      }else {
        console.log("erro em achar os dados por meio do usuário")
      }

    })
    
  }
  

  onSubmit() {
    const id_uid = this.act.snapshot.paramMap.get('id_uid')

    this.userService.updateUser(this.editUserInformation.value, id_uid)
    this.router.navigate([`/home/${id_uid}`])
    
    // this.router.navigate(['listUsers'])
  }
}
