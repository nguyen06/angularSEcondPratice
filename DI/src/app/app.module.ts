import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  Routes,
  RouterModule,
  Router
} from '@angular/router';

import { 
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import {menuDefs} from './Menu.model';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';
import { UserDemoInjectorComponent } from './user-demo/user-demo.injector.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';
import { PriceServiceDemoComponent } from './price-service-demo/price-service-demo.component';
import { UserDemoModule } from './user-demo/user-demo.module';

// build the route
export  const menu: menuDefs[] = [
  {label: 'Intro', name: 'Root', path: '', component: IntroComponent},
  {label: 'Injector', name: 'Injector', path: 'injector', component: UserDemoInjectorComponent},
  {label: 'UseClass', name: 'UseClass', path: 'use-class', component: UserDemoComponent},
  {label: 'Factory', name: 'UseClass', path: 'factory', component: AnalyticsDemoComponent}
];

const routes: Routes = [
  {path: '', component: IntroComponent, pathMatch: 'full' },
  {path: 'injector', component: UserDemoInjectorComponent, pathMatch: 'full'},
  {path: 'use-class', component: UserDemoComponent, pathMatch: 'full'},
  {path: 'factory', component: AnalyticsDemoComponent, pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SidebarComponent,
    SidebarItemComponent,
    UserDemoInjectorComponent,
    UserDemoComponent,
    AnalyticsDemoComponent,
    PriceServiceDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    UserDemoModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: 'menuDefs', useValue: menu}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
