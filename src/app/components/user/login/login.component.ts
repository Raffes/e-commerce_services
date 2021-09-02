import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../auth-user.service';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  // user: User = {
  //   email: "",
  //   password: ""
  // }

  constructor(public authUserService: AuthUserService) { }
//private accountService: AccountService, private router: Router
  ngOnInit(): void {
  }

  // async onSubmit() {
  //   try {
  //     const result = await this.accountService.login(this.login)
  //     console.log(`Loginefetuado: ${result}`)

      
  //     this.router.navigate([''])
  //   }catch(error) {
  //     console.log(error)
  //   }
  // }


}
