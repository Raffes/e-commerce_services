import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-update-use',
  templateUrl: './update-use.component.html',
  styleUrls: ['./update-use.component.css']
})
export class UpdateUseComponent implements OnInit {

  public editForm: FormGroup
  userRef: any
  // userRef: User = new User;

  constructor(
    public userService: AuthService, 
    public formBuider: FormBuilder, 
    private act: ActivatedRoute, 
    private router: Router) { 
    
      this.editForm = this.formBuider.group({
        nameUser: [""],
        lastname: [""],
        cpf: [""],
        phone: [""],
        email: [""],
        password: [""]
        
      })
  }

  ngOnInit(): void {
    const id_user = this.act.snapshot.paramMap.get('id_user')
    
    this.userService.getUserDoc(id_user).subscribe(res => {
      this.userRef = res
      this.editForm = this.formBuider.group({
        nameUser: [this.userRef.nameUser],
        lastname: [this.userRef.lastname],
        cpf: [this.userRef.cpf],
        phone: [this.userRef.phone],
        email: [this.userRef.email],
        password: [this.userRef.password]
      })
      
    })
    
  }
  

  onSubmit() {
    const id_user = this.act.snapshot.paramMap.get('id_user')

    this.userService.updateUser(this.editForm.value, id_user)
    this.router.navigate(['listUsers'])
  }

}
