import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUserService } from '../../user/auth-user.service';
import { AuthService } from '../../user/auth.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  public editProductForm: FormGroup
  productRef: any
  id_uid: any

  constructor(
    public userService: AuthService, 
    public authService : AuthUserService,
    public productService: ProductService,
    public formBuider: FormBuilder, 
    private act: ActivatedRoute, 
    private router: Router) { 
    
      this.editProductForm = this.formBuider.group({
        nameProduct: [""],
        imagesProduct: [""],
        price: [""],
        description: [""],
        category: [""]
        
      })
  }

  ngOnInit(): void {
    this.id_uid = this.act.snapshot.paramMap.get('id_uid')
    const id_product = this.act.snapshot.paramMap.get('id_product')
    
    this.productService.getProductDoc(this.id_uid, id_product).subscribe(res => {
      this.productRef = res
      this.editProductForm = this.formBuider.group({
        nameProduct: [this.productRef.nameProduct],
        imagesProduct: [this.productRef.imagesProduct],
        price: [this.productRef.price],
        description: [this.productRef.description],
        category: [this.productRef.category]
      })
      
    })
    
  }
  

  onSubmit() {
    const id_product = this.act.snapshot.paramMap.get('id_product')

    this.productService.updateProduct(this.editProductForm.value, this.id_uid, id_product)
    this.router.navigate([`/home/userProducts/${this.id_uid}`])
  }
}