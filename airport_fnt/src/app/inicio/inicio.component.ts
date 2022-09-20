import { Component, OnInit } from '@angular/core';
import {AirportService} from "../providers/airport.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  //inyectar la dependencias
  constructor(public airport:AirportService) { }

  ngOnInit(): void {
    this.airport.listar_avion()
  }

}
