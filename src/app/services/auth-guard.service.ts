import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CategoryService } from './category.service';
import { map } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private categoryService: CategoryService, private router: Router,) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    return this.categoryService.getCategories().pipe(map(categories => {
      if(categories.length > 0) return true;
      this.router.navigate(["/category"]);
      return false
    }));
     
  }
}