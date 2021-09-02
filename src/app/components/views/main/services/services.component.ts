import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/components/user/auth-user.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public authService :AuthUserService) { }

  ngOnInit(): void {
  }

}
