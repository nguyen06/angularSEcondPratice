import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  RouterModule,
  Routes
} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import {AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';

import {
  routes as childRoutes,
  ProductsModule
} from './products/products.module';

import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'contactus', redirectTo: 'contact' },
  //authenticate demo
  { path: 'login', component: LoginComponent},
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'products', 
    component: ProductsComponent, 
    children: childRoutes
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    AboutComponent, 
    ContactComponent,
    LoginComponent, 
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),// routes
    ProductsModule
  ],
  providers: [
    //{provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: APP_BASE_HREF, useValue: '/'},
    AUTH_PROVIDERS, 
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
