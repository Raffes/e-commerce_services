import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-user-address',
  templateUrl: './update-user-address.component.html',
  styleUrls: ['./update-user-address.component.css']
})
export class UpdateUserAddressComponent implements OnInit {

  public editUserAddress: FormGroup
  userRef: any
  user: any

  constructor(
    public userService: AuthService, 
    public formBuider: FormBuilder, 
    private act: ActivatedRoute, 
    private router: Router) { 
    
      this.editUserAddress = this.formBuider.group({
        cep: [""],
        numberHouse: [""],
        complement: [""],
        referenceHouse: [""]
        
      })
  }

  ngOnInit(): void {
    const id_uid = this.act.snapshot.paramMap.get('id_uid')
    
    this.userService.getUserDoc(id_uid).subscribe(res => {
      this.userRef = res
      this.editUserAddress = this.formBuider.group({
        cep: [this.userRef.cep],
        numberHouse: [this.userRef.numberHouse],
        complement: [this.userRef.complement],
        referenceHouse: [this.userRef.referenceHouse]
      })
      
    })

    this.userService.getUserListId(id_uid).subscribe((doc) => {
      if(doc.payload.exists) {
        this.user = doc.payload.data()
      }else {
        console.log("erro em achar os dados por meio do usuário")
      }

    })
    
  }
  

  onSubmit() {
    const id_uid = this.act.snapshot.paramMap.get('id_uid')

    this.userService.updateUser(this.editUserAddress.value, id_uid)
    this.router.navigate([`userInformation/update-userAddress/${id_uid}`])
  }

}
