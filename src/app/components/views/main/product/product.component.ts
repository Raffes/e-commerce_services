import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';
import { AuthUserService } from 'src/app/components/user/auth-user.service';
import { AuthService } from 'src/app/components/user/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  user: any
  Products: Product[] = []
  Images: any
  
  constructor(
    public userService: AuthService, 
    public authService :AuthUserService, 
    public productService: ProductService,
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

      this.productService.getProductList1(id_uid).subscribe(res => {
        this.Products = res.map( e => {
          return {
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Product
        })
      })
      
      this.productService.getProductImageList1(id_uid).subscribe(res => {
        this.Images = res.map( e => {
          return {
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          }
        })
      })

    
  }

}

