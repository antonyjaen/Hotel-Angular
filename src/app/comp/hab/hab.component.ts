import { DataService } from './../../services/data.service';

import { Component, OnInit , ViewChild, OnChanges} from '@angular/core';
import axios from "axios";
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-hab',
  templateUrl: './hab.component.html',
  styleUrls: ['./hab.component.css']
})
export class HabComponent implements OnInit , OnChanges{
  list:any[]=[];
  displayedColumns: string[] = ["numero","piso","descripcion","caracteristicas","precio","estado","tipo"];
  
  dataSource ;
  
  Api = this.data.api;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit() {
    this.escribir();
  }
  ngOnChanges():void{
    this.escribir();
  }
  constructor(public data: DataService) { }
  del(num):void{
   if(confirm("Seguro Desea Eliminar La Habitacion")){
    axios.delete(this.Api+`/habitDel/${num}`)
    .then((response)=> { 
      alert(response.data)
      this.escribir();
    })
    .catch(function (error) {
      console.log(error);
    });
    
   } 
  }
  escribir(){
    axios.get(this.Api+'/habit')
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
  numero: string;
  piso: string;
  des: string;
  cara: string;
  precio: string;
  estado:string;
  tipo:string;
}
