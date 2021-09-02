import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from '../auth-user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public userForm: FormGroup

  constructor(
    public authUserService: AuthUserService,
    public userService: AuthService, public formBuilder: FormBuilder, public router: Router
  ) { 
    this.userForm = this.formBuilder.group({
      displayName: [""],
      lastname: [""],
      cpf: [""],
      phoneNumber: [""],
      email: [""],
      password: [""]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.userService.createUser(this.userForm.value)
    this.authUserService.SignUp(this.userForm.value)
    this.router.navigate(['login'])
  }

}
