import { Component, Input, OnInit } from '@angular/core';
import { EldoradoService } from '../eldorado.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[EldoradoService]
})
export class CategoryComponent implements OnInit {

  constructor(private eldoradoService: EldoradoService) { }

  categories;

  ngOnInit(): void {
    this.eldoradoService.getCategories().subscribe(res=>{
      this.categories = res;  
    })
  }

  deleteCategory(id){
    console.log(id);
    
    this.eldoradoService.delCategory(id).subscribe(()=>{
      console.log("Category",id,"deleted!");
    })
  }



}
