import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadFormComponent } from './components/images/upload-form/upload-form.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { ListSerComponent } from './components/user/list-ser/list-ser.component';
import { LoginComponent } from './components/user/login/login.component';
import { AuthGuard } from './components/user/shared/auth.guard';
import { UpdateUseComponent } from './components/user/update-use/update-use.component';
import { UpdateUserAddressComponent } from './components/user/update-user-address/update-user-address.component';
import { UpdateUserInformationComponent } from './components/user/update-user-information/update-user-information.component';
import { AuthenticatedUserComponent } from './components/views/authenticated-user/authenticated-user.component';
import { AboutComponent } from './components/views/footer-content/about/about.component';
import { ContactComponent } from './components/views/footer-content/contact/contact.component';
import { ExchangesComponent } from './components/views/footer-content/exchanges/exchanges.component';
import { PrivacyComponent } from './components/views/footer-content/privacy/privacy.component';
import { TermsComponent } from './components/views/footer-content/terms/terms.component';
import { ShoppingCartComponent } from './components/views/header-content/shopping-cart/shopping-cart.component';
import { UserFavoritesComponent } from './components/views/header-content/user-favorites/user-favorites.component';
import { UserInformationComponent } from './components/views/header-content/user-information/user-information.component';
import { UserOrdersComponent } from './components/views/header-content/user-orders/user-orders.component';
import { UserProductsComponent } from './components/views/header-content/user-products/user-products.component';
import { HomeComponent } from './components/views/home/home.component';
import { HomeProductsComponent } from './components/views/main/home-products/home-products.component';
import { ProductComponent } from './components/views/main/product/product.component';
import { ProductsComponent } from './components/views/main/products/products.component';
import { ServicesComponent } from './components/views/main/services/services.component';
import { VerifyEmailComponent } from './components/views/main/verify-email/verify-email.component';

const routes: Routes = [
    
    //Não autenticado
    {
    path: '',
    component: HomeComponent,
    children: [
      // {path: 'product', component: ProductComponent},
      {path: 'createUser', component: CreateUserComponent},
      {path: 'login', component: LoginComponent},
      //{path: '', component: },
      {path: 'privacy', component: PrivacyComponent},
      {path: 'terms', component: TermsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'exchanges', component: ExchangesComponent},
      {path: 'contact', component: ContactComponent},
      // {path: 'shoppingCart', component: ShoppingCartComponent},
      {path: 'verify-email', component: VerifyEmailComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},

      {path: 'listUsers', component: ListSerComponent},
      {path: 'update-user/:id_user', component: UpdateUseComponent}
      
      
    ]
  },
  //Autenticado
  {path: 'home/:id_uid', component: HomeProductsComponent},
    {path: 'home/product/:id_uid', component: ProductComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'terms', component: TermsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'exchanges', component: ExchangesComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'home/product/:id_uid/:id_product', component: ProductComponent},
    {path: 'home/products/:id_uid', component: ProductsComponent},
    {path: 'home/services/:id_uid', component: ServicesComponent},
    {path: 'home/shoppingCart/:id_uid', component: ShoppingCartComponent},
    {path: 'home/userFavorites/:id_uid', component: UserFavoritesComponent},
    {path: 'home/userOrders/:id_uid', component: UserOrdersComponent},
    {path: 'home/userProducts/:id_uid', component: UserProductsComponent},
    {path: 'home/userInformation/:id_uid', component: UpdateUserInformationComponent},
    {path: 'userProducts/createProduct/:id_uid', component: CreateProductComponent},
    {path: 'userProducts/updateProduct/:id_uid/:id_product', component: UpdateProductComponent},
    

    {path: 'ts/:id_uid', component: AuthenticatedUserComponent},

    // {path: 'uploadForm/:id_uid', component: UploadFormComponent}
    

  //Autenticado
  // {path: 'home/:id_uid', component: HomeProductsComponent,
  //   children: [
    
  //   {path: 'product/:id_uid', component: ProductComponent},
  //   {path: 'privacy', component: PrivacyComponent},
  //   {path: 'terms', component: TermsComponent},
  //   {path: 'about', component: AboutComponent},
  //   {path: 'exchanges', component: ExchangesComponent},
  //   {path: 'contact', component: ContactComponent},
  //   {path: 'shoppingCart/:id_uid', component: ShoppingCartComponent},
  //   {path: 'userFavorites/:id_uid', component: UserFavoritesComponent},
  //   {path: 'home/userOrders/:id_uid', component: UserOrdersComponent},
  //   {path: 'home/:id_uid/userProducts', component: UserProductsComponent},
  //   {path: 'home/userInformation/:id_uid', component: UpdateUserInformationComponent},
  //   {path: 'userProducts/createProduct/:id_uid', component: CreateProductComponent},
  //   {path: 'userProducts/updateProduct/:id_uid/:id_product', component: UpdateUseComponent},

  //   {path: 'ts/:id_uid', component: AuthenticatedUserComponent},
    
  // ],
  // canActivate: [AuthGuard]
  // }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
