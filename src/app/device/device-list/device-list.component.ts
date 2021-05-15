
import { Component, Input, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }

  @Input() devices: Device[];

  ngOnInit(): void {
  }


  deleteDevice(id){
   
    this.deviceService.delDevice(id).subscribe(()=>{
      this.devices = this.devices.filter((device)=>device.id!=id);
      this.deviceService.emitDevicesChangeEvent(this.devices);
    });
  }

}
