

import { DataService } from 'src/app/services/data.service';
import axios from "axios";
import { AxiosInstance } from "axios";

import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  constructor( public data: DataService) {
  }
  oks;
  isCollapsed = true;
  close(){
    this.data.ok=false;
    window.location.replace('/');
  }
}
