import { Component } from '@angular/core';
import {deleteOutputDir} from "@angular-devkit/build-angular/src/utils";
import {AirportService} from "./providers/airport.service";
import {ApiService} from "./providers/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public airport:AirportService, public api:ApiService) {
  }
}
