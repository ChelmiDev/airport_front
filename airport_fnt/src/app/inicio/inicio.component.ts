import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  //inyectar la dependencias
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.get('avion')
      .subscribe( data =>{
        console.log(data)
      })
  }

}
