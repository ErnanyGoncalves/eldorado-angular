import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  categories : Category[] = [];

  ngOnInit(): void {
   this.categoryService.categoriesChange.subscribe((res)=>{      
      this.categories = res;
    });
    
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    });
  }

  

}
