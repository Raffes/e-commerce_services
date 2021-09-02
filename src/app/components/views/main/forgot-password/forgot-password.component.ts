import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/components/user/auth-user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public authUserService: AuthUserService) { }

  ngOnInit(): void {
  }

}
