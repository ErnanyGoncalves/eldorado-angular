
import { Component, Input, OnInit } from '@angular/core';
import { EldoradoService } from 'src/app/eldorado.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {

  constructor(private eldoradoService: EldoradoService) { }

  @Input() devices;

  ngOnInit(): void {
  }

  deleteDevice(id){
    console.log(id);
    
    this.eldoradoService.delDevice(id).subscribe(()=>{
      console.log("Device",id,"deleted!");
    })
  }

}
