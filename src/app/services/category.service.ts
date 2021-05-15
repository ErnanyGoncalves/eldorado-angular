import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriesChange: EventEmitter<Category[]> = new EventEmitter<Category[]>();
  

  constructor(private httpClient: HttpClient) { 
  }
  
  getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>("http://localhost:8000/category");
  }

  newCategory(data){
    return this.httpClient.post("http://localhost:8000/category",data);
  }

  delCategory(id):Observable<Object>{
    return this.httpClient.delete("http://localhost:8000/category/"+id);
  }
  
  emitCategoriesChangeEvent(categories) {
    this.categoriesChange.emit(categories);
  }

}
