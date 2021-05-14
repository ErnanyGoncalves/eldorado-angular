import { Component, Input, OnInit } from '@angular/core';
import { EldoradoService } from 'src/app/eldorado.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private eldoradoService: EldoradoService) { }

  @Input() categories;

  ngOnInit(): void {
    
  }

  deleteCategory(id){
    console.log(id);
    
    this.eldoradoService.delCategory(id).subscribe(()=>{
      console.log("Category",id,"deleted!");
    })
  }

}
