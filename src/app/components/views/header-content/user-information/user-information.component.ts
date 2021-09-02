import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/components/user/auth.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html'
})
export class UserInformationComponent implements OnInit {
  
  user: any

  constructor(public userService: AuthService, private act: ActivatedRoute) { }

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
