import {Component, Injectable, OnInit} from '@angular/core';
import {AirportService} from "../providers/airport.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../providers/api.service";

@Component({
  selector: 'app-piloto',
  templateUrl: './piloto.component.html',
  styleUrls: ['./piloto.component.css']
})

export class PilotoComponent implements OnInit {
  pilotos:any = [];

  form_piloto = this.fb.group({
    id:[''],
    codigo_piloto :['',Validators.required],
    nombre_piloto : ['',Validators.required],
    horas_vuelo_piloto: ['',Validators.required],

  })
  ver_formulario_piloto: boolean=false;


  constructor(public api:ApiService, private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.listar_piloto()
  }
  listar_piloto(){
    this.api.get('piloto')
      .subscribe( data =>{
        if(data!= undefined) {
          this.pilotos = data;
        }
      })
  }

  llenar_form_piloto(piloto:any){
    this.form_piloto.patchValue({
      id:piloto.id,
      codigo_piloto:piloto.codigo_piloto,
      nombre_piloto:piloto.nombre_piloto,
      horas_vuelo_piloto:piloto.horas_vuelo_piloto,

    })
  }
  guardar_actualizar_piloto(){
    if(this.form_piloto.value['id']){
      this.actualizar_piloto()
    }else{
      this.guardar_piloto()
    }
  }
  guardar_piloto(){
    this.api.add('piloto',this.form_piloto.value)
      .subscribe( data =>{
        if(data!=undefined) {
          //data trae el registro con la id que guardamos en la bd
          this.ver_formulario_piloto = false
          this.form_piloto.reset()
          this.listar_piloto()

        }
      })
  }
  actualizar_piloto(){
    this.api.update('avion',this.form_piloto.value['id'],this.form_piloto.value)
      .subscribe( data =>{
        if(data!=undefined) {
          //data trae el registro con la id que guardamos en la bd
          this.ver_formulario_piloto = false
          this.form_piloto.reset()
          this.listar_piloto()

        }
      })
  }
}
