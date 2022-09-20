import {Injectable} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {MenuItem} from 'primeng/api';
import {ApiService} from "./api.service";
import {Router} from "@angular/router";

@Injectable({
  //se coloque disponible para toda la aplicacion
  providedIn: 'root'
})
export class AirportService{
  aviones:any = [];

  form_avion = this.fb.group({
    id:[''],
    codigo_avion:['',Validators.required],
    tipo_avion:['',Validators.required],
    ciudad_base:['',Validators.required],
    marca:['',Validators.required],
  })


  ver_formulario_avion: boolean=false;
  //menu
  items: MenuItem[] = [
    {label: 'Home', icon: 'pi pi-home', command: (event) => {
      this.router.navigate(['/home'])
      }},
    {label: 'Avion', icon: 'pi pi-plane', command: (event) => {
        this.router.navigate(['/inicio'])
      }},
    {label: 'Piloto', icon: 'pi pi-pilot', command: (event) => {
        this.router.navigate(['/piloto'])
      }},

  ];

  constructor(public api:ApiService,private fb:FormBuilder,private router:Router) {
  }
  listar_avion(){
    this.api.get('avion')
      .subscribe( data =>{
        if(data!= undefined) {
          this.aviones = data;
        }
      })
  }

  // llenar formulario
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
