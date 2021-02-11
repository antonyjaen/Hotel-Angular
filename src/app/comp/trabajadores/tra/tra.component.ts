import { DataService } from './../../../services/data.service';

import { Component, OnInit , ViewChild, OnChanges} from '@angular/core';
import axios from "axios";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tra',
  templateUrl: './tra.component.html',
  styleUrls: ['./tra.component.css']
})
export class TraComponent implements OnInit , OnChanges{
  displayedColumns: string[] = ["nombre","apellidoP","apellidoM","tipo","documento","direccion","telefono","mail","acceso","usuario","password","estado"];
  //12
  dataSource ;
  Api = this.data.api
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit() {
    this.escribir();
  }
  ngOnChanges():void{
    this.escribir();
  }
  constructor(public data: DataService) { }

  escribir(){
    axios.get(this.Api+'/worker')
    .then((response)=> { 
      console.log(response.data);
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.paginator = this.paginator;
    })
    .catch(function (error) {
      console.log(error);
    });
   }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
export interface PeriodicElement {
  nombre: string;
  apellidoP: string;
  apellidoM: string;
  tipo: string;
  documento: string;
  direccion:string;
  telefono:string;
  mail:string;
  acceso:string;
  usuario:string;
  password:string;
  estado:string;
}
