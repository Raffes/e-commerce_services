import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUserService } from '../../user/auth-user.service';
import { AuthService } from '../../user/auth.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-authenticated-user',
  templateUrl: './authenticated-user.component.html',
  styleUrls: ['./authenticated-user.component.css']
})
export class AuthenticatedUserComponent implements OnInit {

  user: any

  constructor(public userService: AuthService, public authService : AuthUserService, private act: ActivatedRoute) { }

  ngOnInit(): void {
    const uid = this.act.snapshot.paramMap.get('id_uid')
    // const id_uid = this.act.snapshot.paramMap.get('id_uid')
    console.log(uid)

    this.userService.getUserListId(uid).subscribe((doc) => {
        if(doc.payload.exists) {
          this.user = doc.payload.data()
        }else {
          console.log("erro em achar os dados por meio do usuário")
        }

      })
  }

}
