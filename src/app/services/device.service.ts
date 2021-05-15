import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  devicesChange: EventEmitter<Device[]> = new EventEmitter<Device[]>();

  constructor(private httpClient: HttpClient) { }

  getDevices():Observable<Device[]>{
    return this.httpClient.get<Device[]>("http://localhost:8000/device");
  }

  newDevice(data){
    return this.httpClient.post("http://localhost:8000/device",data);
  }

  delDevice(id):Observable<Object>{
    return this.httpClient.delete("http://localhost:8000/device/"+id);
  }

  emitDevicesChangeEvent(devices) {
    this.devicesChange.emit(devices);
  }

}
