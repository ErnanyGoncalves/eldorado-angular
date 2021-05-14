import { Component, OnInit } from '@angular/core';
import { EldoradoService } from '../eldorado.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css'],
  providers:[EldoradoService]
})
export class DeviceComponent implements OnInit {

  constructor(private eldoradoService: EldoradoService) { }

  devices;

  categories;

  ngOnInit(): void {
    this.eldoradoService.getDevices().subscribe(res=>{
      this.devices = res;  
    })
    this.eldoradoService.getCategories().subscribe(res=>{
      this.categories = res;  
    })
  }

}
