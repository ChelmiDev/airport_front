import { Component } from '@angular/core';
import {deleteOutputDir} from "@angular-devkit/build-angular/src/utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lista = [
    {'marca':'Chevrolet','modelos':[
        {'linea':'Captiva','version':'Lts'},
        {'linea':'Spark GT','version':'Lts'},
        {'linea':'Spark Go','version':'Lts'},
      ],'Disponibilidad':[
        {'ciudad':'Medellin'},
        {'ciudad':'Pasto'},
        {'ciudad':'Bogota'},
        {'ciudad':'Cali'},
      ]
    },
    {'marca':'Volkswagen','modelos':[
        {'linea':'Gol','version':'Trendline'},
        {'linea':'Jetta','version':'Confortline'},
        {'linea':'Fox','version':'Trendline'},
      ],'Disponibilidad':[
        {'ciudad':'Pereira'},
        {'ciudad':'Manizales'},
        {'ciudad':'Bogota'},
        {'ciudad':'Cali'},
      ]
    },
    {'marca':'Renault','modelos':[
        {'linea':'Duster','version':'Dynamique'},
        {'linea':'Sandero','version':'Dynamic'},
        {'linea':'Logan','version':'Authentique'},
      ],'Disponibilidad':[
        {'ciudad':'Medellin'},
        {'ciudad':'Pasto'},
        {'ciudad':'Bogota'},
        {'ciudad':'Cali'},
      ]
    },
    {'marca':'Mazda','modelos':[
        {'linea':'Mazda 2','version':'Dynamique'},
        {'linea':'Mazda 3','version':'Dynamic'},
        {'linea':'CX5','version':'Authentique'},
      ],'Disponibilidad':[
        {'ciudad':'Pereira'},
        {'ciudad':'Manizales'},
        {'ciudad':'Bogota'},
        {'ciudad':'Cali'},
      ]
    },

  ]
//,linea:string,version:string,ciudad:string

  adiccionar(marca:string,linea:string,version:string,ciudad:string) {
    this.lista.push({'marca':marca, 'modelos': [], 'Disponibilidad': []})
    let item = this.lista.filter( item => item.marca == marca)[0]
    item.modelos.push( {'linea':linea, 'version':version})
    item.Disponibilidad.push( {'ciudad':ciudad})

  }
  borrar(item:any){
  this.lista.splice(this.lista.indexOf(item),1)
  }
}
