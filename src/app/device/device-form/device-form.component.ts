import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EldoradoService } from 'src/app/eldorado.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  constructor(private eldoradoService: EldoradoService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value);  
    this.eldoradoService.newDevice(form.value).subscribe(res=>{
      console.log(res);
    });
  }
}
