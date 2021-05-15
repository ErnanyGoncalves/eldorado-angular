import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  @Input() categories: Object[];

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    this.categoryService.newCategory(form.value).subscribe(res=>{     
      this.categories.push(res);
      this.categoryService.emitCategoriesChangeEvent(this.categories);
      form.reset();
    });
  }

}
