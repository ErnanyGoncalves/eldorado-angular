import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EldoradoService } from 'src/app/eldorado.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  constructor(private eldoradoService: EldoradoService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value);  
    this.eldoradoService.newCategory(form.value).subscribe(res=>{
      console.log(res);
    });
}

}
