import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private router: Router, private angFireDB: AngularFirestore) { }


  getProductDoc(id_uid: any, id_product: any) {
    return this.angFireDB.collection("user-colletion").doc(id_uid)
    .collection<Product>("product-colletion")
    .doc(id_product)
    .valueChanges()

  }

  // getUserListId(id_uid: any) {
  //   return this.angFireDB.collection<User>("user-colletion").doc(id_uid).snapshotChanges()
    
  // }

  getProductListId(id_product: any) {
    return this.angFireDB.collection<Product>("product-colletion").doc(id_product).snapshotChanges()
    
  }

  getProductList1(id_uid: any) {
    return this.angFireDB.collection("user-colletion").doc(id_uid)
    .collection<Product>("product-colletion")
    .snapshotChanges()

  }

  getProductImageList1(id_uid: any) {
    return this.angFireDB.collection("user-colletion").doc(id_uid)
    .collection("files-products")
    .snapshotChanges()

  }

  getProductList() {
    return this.angFireDB.collection("user-colletion").doc()
    .collection<Product>("product-colletion")
    .snapshotChanges()

  }
  
  async createProduct(product: Product, id_uid: any) {
    try {
      const docRef = await (await this.angFireDB.collection("user-colletion").doc(id_uid).collection("product-colletion").add(product));

      const productId = this.angFireDB.collection("user-colletion").doc(id_uid)
      .collection("product-colletion").doc(docRef.id).update({
        "id_product": docRef.id
      }).then(() => {
        console.log("Document product successfully updated!");
      });

      console.log(productId)

      console.log("Documento product escrito com id: ", docRef.id);

    } catch (error) {
      console.error("Error em criar produto: ", error);
    } 
  }


  deleteProduct(id_uid: any, product: Product) {
    return this.angFireDB.collection("user-colletion").doc(id_uid)
    .collection("product-colletion")
    .doc(product.id_product)
    .delete()
  }

  updateProduct(product: Product, id_uid: any, id_product: any) {
    return this.angFireDB
    .collection("user-colletion").doc(id_uid).collection("product-colletion")
    .doc(id_product)
    .update({
      nameProduct: product.nameProduct,
      imagesProduct: product.imagesProduct,
      price: product.price,
      description: product.description,
      category: product.category

    })

  }


}