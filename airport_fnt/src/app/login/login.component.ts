import { Component, OnInit } from '@angular/core';
import {ApiService} from "../providers/api.service";
import {FormBuilder, Validators} from "@angular/forms";
import {formControl} from "@angular/core/schematics/migrations/typed-forms/util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form_usuario = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required] // Deben tener el mismo nombre que tienen en la base de datos
  })



  // inyectar las dependencias
  constructor(private api:ApiService, private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.api.login(this.form_usuario.value)
      .subscribe(
        data=>{
          if(data!= undefined){
            this.router.navigate(['/inicio'])
          }else {
            this.router.navigate(['/login'])
          }
        }

      )

  }
}
