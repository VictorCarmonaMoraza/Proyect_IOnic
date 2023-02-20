import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  //Para recibir de cada boton el titulo
  @Input() titulo:string = '';

  constructor() { }

  ngOnInit() {}

}
