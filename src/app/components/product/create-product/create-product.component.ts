import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthUserService } from '../../user/auth-user.service';
import { AuthService } from '../../user/auth.service';
import { User } from '../../user/user.model';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public productForm: FormGroup
  user: any
  id_uid: any
  ref!: AngularFireStorageReference;
  task!: AngularFireUploadTask;

  constructor(
    private act: ActivatedRoute, 
    public userService: AuthService, 
    public authService : AuthUserService,
    public productService: ProductService, 
    public formBuilder: FormBuilder, 
    public router: Router,
    private afStorage: AngularFireStorage,
    private http: HttpClient
  ) { 
    this.productForm = this.formBuilder.group({
      nameProduct: [""],
      imagesProduct: [""],
      price: [""],
      description: [""],
      category: [""],
    })
  }

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


  onSubmit(id_uid: any) {
    this.productService.createProduct(this.productForm.value, id_uid)
    // this.authUserService.SignUp(this.userForm.value)
    this.router.navigate([`/home/userProducts/${id_uid}`])
  }


  
  isHovering: boolean = false;

  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      this.files.push(files[i]);
    }
  }
  

}
