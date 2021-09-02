import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http'

import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { HomeProductsComponent } from './components/views/main/home-products/home-products.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { LoginComponent } from './components/user/login/login.component';
import { ProductComponent } from './components/views/main/product/product.component';
import { AuthenticatedUserComponent } from './components/views/authenticated-user/authenticated-user.component';
import { AuthService } from './components/user/auth.service';
import { PrivacyComponent } from './components/views/footer-content/privacy/privacy.component';
import { TermsComponent } from './components/views/footer-content/terms/terms.component';
import { AboutComponent } from './components/views/footer-content/about/about.component';
import { ExchangesComponent } from './components/views/footer-content/exchanges/exchanges.component';
import { ContactComponent } from './components/views/footer-content/contact/contact.component';
import { ShoppingCartComponent } from './components/views/header-content/shopping-cart/shopping-cart.component';
import { UserFavoritesComponent } from './components/views/header-content/user-favorites/user-favorites.component';
import { UserOrdersComponent } from './components/views/header-content/user-orders/user-orders.component';
import { UserProductsComponent } from './components/views/header-content/user-products/user-products.component';
import { UserInformationComponent } from './components/views/header-content/user-information/user-information.component';
import { CreateProductComponent } from './components/product/create-product/create-product.component';
import { environment } from 'src/environments/environment';
import { ListSerComponent } from './components/user/list-ser/list-ser.component';
import { UpdateUseComponent } from './components/user/update-use/update-use.component';
import { AuthUserService } from './components/user/auth-user.service';
import { ForgotPasswordComponent } from './components/views/main/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/views/main/verify-email/verify-email.component';
import { UpdateUserInformationComponent } from './components/user/update-user-information/update-user-information.component';
import { UpdateUserAddressComponent } from './components/user/update-user-address/update-user-address.component';
import { UpdateUserPasswordComponent } from './components/user/update-user-password/update-user-password.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { UploadFormComponent } from './components/images/upload-form/upload-form.component';
import { UploadListComponent } from './components/images/upload-list/upload-list.component';
import { UploadDetailsComponent } from './components/images/upload-details/upload-details.component';
import { ProductsComponent } from './components/views/main/products/products.component';
import { ServicesComponent } from './components/views/main/services/services.component';
import { DropzoneDirective } from './components/images/dropzone.directive';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeProductsComponent,
    CreateUserComponent,
    LoginComponent,
    ProductComponent,
    AuthenticatedUserComponent,
    PrivacyComponent,
    TermsComponent,
    AboutComponent,
    ExchangesComponent,
    ContactComponent,
    ShoppingCartComponent,
    UserFavoritesComponent,
    UserOrdersComponent,
    UserProductsComponent,
    UserInformationComponent,
    CreateProductComponent,
    ListSerComponent,
    UpdateUseComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    UpdateUserInformationComponent,
    UpdateUserAddressComponent,
    UpdateUserPasswordComponent,
    UpdateProductComponent,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent,
    ProductsComponent,
    ServicesComponent,
    DropzoneDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule
    
  ],
  providers: [AuthUserService, AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
