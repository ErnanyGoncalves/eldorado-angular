import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  @Input() categories: Category[];


  ngOnInit(): void { }

  deleteCategory({ id, name, listOfDevices }) {


    if (confirm(listOfDevices && listOfDevices.length > 0 ? `Are you sure you want to delete the ${name} category and its ${listOfDevices.length} device(s)?` : `Are you sure you want to delete the ${name} category?`)) {
      this.categoryService.delCategory(id).subscribe(() => {
        this.categories = this.categories.filter((category) => category.id != id);
        this.categoryService.emitCategoriesChangeEvent(this.categories);
      });
    }

  }


}

