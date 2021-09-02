import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthUserService } from 'src/app/components/user/auth-user.service';
import { AuthService } from 'src/app/components/user/auth.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css']
})
export class UserOrdersComponent implements OnInit {
  user: any

  constructor(
    public userService: AuthService, 
    public authService :AuthUserService, 
    private act: ActivatedRoute) { }

  ngOnInit(): void {
    const id_uid = this.act.snapshot.paramMap.get('id_uid')

    this.userService.getUserListId(id_uid).subscribe((doc) => {
        if(doc.payload.exists) {
          this.user = doc.payload.data()
        }else {
          console.log("erro em achar os dados por meio do usuário")
        }

      })

    
  }

}
