import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/components/user/auth-user.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html'
})
export class VerifyEmailComponent implements OnInit {

  constructor(public authUserService: AuthUserService) { }

  ngOnInit(): void {
  }

}
