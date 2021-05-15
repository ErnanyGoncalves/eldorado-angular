import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }

  @Input() devices : Object[];
  @Input() categories : Category[];

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){   
    console.log(form.value);
    this.deviceService.newDevice(form.value).subscribe(res=>{
      this.devices.push(res);
      this.deviceService.emitDevicesChangeEvent(this.devices);
      form.reset();
    });
  }
}
