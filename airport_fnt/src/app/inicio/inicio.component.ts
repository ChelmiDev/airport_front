import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  aviones:any = [];

  form_avion = this.fb.group({
    id:[''],
    codigo_avion:['',Validators.required],
    tipo_avion:['',Validators.required],
    ciudad_base:['',Validators.required],
    marca:['',Validators.required],
  })
  ver_formulario_avion: boolean=false;

  //inyectar la dependencias
  constructor(private api:ApiService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.listar_avion()
  }

  listar_avion(){
    this.api.get('avion')
      .subscribe( data =>{
        if(data!= undefined) {
          this.aviones = data;
        }
      })
  }
  llenar_form_avion(avion:any){
    this.form_avion.patchValue({
      id:avion.id,
      codigo_avion:avion.codigo_avion,
      tipo_avion:avion.tipo_avion,
      ciudad_base:avion.ciudad_base,
      marca:avion.marca,
    })
  }
  guardar_actualizar_avion(){
    if(this.form_avion.value['id']){
      this.actualizar_avion()
    }else{
      this.guardar_avion()
    }
  }

  guardar_avion(){
    this.api.add('avion',this.form_avion.value)
      .subscribe( data =>{
        if(data!=undefined) {
          //data trae el registro con la id que guardamos en la bd
          this.ver_formulario_avion = false
          this.form_avion.reset()
          this.listar_avion()

        }
      })
  }

  actualizar_avion(){
    this.api.update('avion',this.form_avion.value['id'],this.form_avion.value)
      .subscribe( data =>{
        if(data!=undefined) {
          //data trae el registro con la id que guardamos en la bd
          this.ver_formulario_avion = false
          this.form_avion.reset()
          this.listar_avion()

        }
      })
  }


}
