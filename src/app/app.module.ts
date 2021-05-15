import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { DeviceComponent } from './device/device.component';
import { NavComponent } from './nav/nav.component';
import { CategoryFormComponent } from './category/category-form/category-form.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceFormComponent } from './device/device-form/device-form.component';
import { AuthGuard } from './services/auth-guard.service';

const eldoradoRoutes: Routes = [
  { path: '', component: CategoryComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'device', canActivate: [AuthGuard], component: DeviceComponent },
  { path: ':anythingelse', redirectTo: '' }
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
    HttpClientModule,
    RouterModule.forRoot(eldoradoRoutes),
    FormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
