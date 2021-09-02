import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/components/product/product.model';
import { ProductService } from 'src/app/components/product/product.service';
import { AuthUserService } from 'src/app/components/user/auth-user.service';
import { AuthService } from 'src/app/components/user/auth.service';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {
  user: any
  Products: Product[] = []
  id_uid: any
  constructor(public userService: AuthService, public productService: ProductService, public authService :AuthUserService, private act: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id_uid = this.act.snapshot.paramMap.get('id_uid')

    this.userService.getUserListId(this.id_uid).subscribe((doc) => {
        if(doc.payload.exists) {
          this.user = doc.payload.data()
        }else {
          console.log("erro em achar os dados por meio do usuário")
        }

      })

      this.productService.getProductList1(this.id_uid).subscribe(res => {
        this.Products = res.map( e => {
          return {
            key: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Product
        })
      })
  }

  navigateToProductCreate(id_uid: any): void {
    this.router.navigate([`/userProducts/createProduct/${id_uid}`])
  }

  removeProduct = (product: Product) => this.productService.deleteProduct(this.id_uid, product)


}
