import { Component, OnInit } from '@angular/core';
import { EldoradoService } from '../eldorado.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers:[EldoradoService]
})
export class NavComponent implements OnInit {

  constructor(private eldoradoService: EldoradoService) { }

  categories = [];

  ngOnInit(): void {
    this.categories = this.eldoradoService.categories;
  }

}
