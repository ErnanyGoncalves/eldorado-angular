import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EldoradoService } from 'src/app/eldorado.service';

@Component({
  selector: 'app-device-form',
  templateUrl: './device-form.component.html',
  styleUrls: ['./device-form.component.css']
})
export class DeviceFormComponent implements OnInit {

  constructor(private eldoradoService: EldoradoService) { }
  @Input() categories;

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.eldoradoService.newDevice(form.value).subscribe(res=>{
      console.log(res);
    });
  }
}
