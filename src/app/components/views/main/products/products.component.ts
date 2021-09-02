import { Component, OnInit } from '@angular/core';
import { AuthUserService } from 'src/app/components/user/auth-user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public authService :AuthUserService) { }

  ngOnInit(): void {
  }

}
