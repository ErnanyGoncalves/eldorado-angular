import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { DeviceComponent } from './device/device.component';
import { NavComponent } from './nav/nav.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceFormComponent } from './device/device-form/device-form.component';

const eldoradoRoutes:Routes = [
  {path:'',component:CategoryComponent},
  {path:'category',component:CategoryComponent},
  {path:'device',component:DeviceComponent},
  {path:':anythingelse',redirectTo:''}
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    DeviceComponent,
    NavComponent,
    CategoryFormComponent,
    CategoryListComponent,
    DeviceListComponent,
    DeviceFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(eldoradoRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
