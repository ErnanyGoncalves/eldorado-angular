import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { Device } from '../models/device.model';
import { CategoryService } from '../services/category.service';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
})
export class DeviceComponent implements OnInit {

  constructor(private categoryService: CategoryService, private deviceService: DeviceService) { }

  categories: Category[] = [];
  devices: Device[] = [];

  ngOnInit(): void {

    this.deviceService.devicesChange.subscribe((res)=>{      
      this.devices = res;
    });

    this.deviceService.getDevices().subscribe((res)=>{
      this.devices = res;
    });
     
    this.categoryService.categoriesChange.subscribe((res)=>{      
      this.categories = res;
    });

    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    });   
    
  }
}
