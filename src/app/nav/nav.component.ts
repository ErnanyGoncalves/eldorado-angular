import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  hasCategories: Boolean = false;

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      this.hasCategories = res.length > 0;
    });

    this.categoryService.categoriesChange.subscribe((res) => {
      this.hasCategories = res.length > 0;     
    });

  }

}
