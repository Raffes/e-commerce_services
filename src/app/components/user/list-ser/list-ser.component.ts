import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-list-ser',
  templateUrl: './list-ser.component.html',
  styleUrls: ['./list-ser.component.css']
})
export class ListSerComponent implements OnInit {

  Users: User[] = []
  userId: any
  constructor(private userService: AuthService) { }

  ngOnInit(): void {
    this.userService.getUserList().subscribe(res => {
      this.Users = res.map( e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        } as User
      })
    })

  }

  removeUser = (user: User) => this.userService.deleteUser(user)

}
