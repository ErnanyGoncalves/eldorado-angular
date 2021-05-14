import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EldoradoService {
  constructor(private httpClient: HttpClient) { 
  }

  categories = [];
  devices = [];

  getCategories(){
    return this.httpClient.get("http://localhost:8000/category");
  }

  getDevices(){
    return this.httpClient.get("http://localhost:8000/device");
  }

  newCategory(data){
    return this.httpClient.post("http://localhost:8000/category",data);
  }

  newDevice(data){
    return this.httpClient.post("http://localhost:8000/device",data);
  }

  delCategory(id){
    return this.httpClient.delete("http://localhost:8000/category/"+id);
  }

  delDevice(id){
    return this.httpClient.delete("http://localhost:8000/device/"+id);
  }
}
