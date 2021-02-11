import { Router, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import axios from "axios";
import { AxiosInstance } from "axios";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  estado:boolean=false;
  user:String;
  pass:String;
  constructor( public data: DataService,public router:Router) {}
  ngOnInit(): void {}
  async verificar(us,pa){
    const ok = await this.data.login(us,pa);
    if(ok){
        this.data.ok=true;
        this.router.navigate(["/Perfil"]);
      }else{
        this.data.ok=false;
        this.estado=true;
      }
      setTimeout(()=>{this.estado=false},2000);
   }
}