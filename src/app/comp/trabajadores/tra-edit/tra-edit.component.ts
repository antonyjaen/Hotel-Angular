import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import axios from "axios";
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-tra-edit',
  templateUrl: './tra-edit.component.html',
  styleUrls: ['./tra-edit.component.css']
})
export class TraEditComponent implements OnInit {

  hab:{nombre,apellidoP,apellidoM,tipo,documento,direccion,telefono,mail,acceso,usuario,password,estado};
  //myControl = new FormControl();
  action=0;
  constructor(private rutaActiva: ActivatedRoute,public data: DataService) {  }
  Api = this.data.api
  async ngOnInit(): Promise<void> {
    if(this.rutaActiva.snapshot.params.documento=="Agregar"){
      this.hab={
        nombre:"",
        apellidoP:'',
        apellidoM:'',
        tipo:"",
        documento:"",
        direccion:'',
        telefono:"",
        mail:"",
        acceso:'',
        usuario:"",
        password:"",
        estado:""
      };
        this.action=0;
    }else{
      const env = axios.post(this.Api+'/worker/'+this.rutaActiva.snapshot.params.documento);
      
       this.hab = (await env).data; 

      console.log(this.hab);
      this.action=this.rutaActiva.snapshot.params.documento;
    }
  }
  del(){
    var num=this.hab.documento;
    axios.delete(this.Api+'/workerDel/'+num);
  }
  
  async comprovar(){
    console.log("El estado es "+this.action)
    if(confirm("Desea Hacer Los Cambios ? ")){
    if(this.action==0){
      const env = axios.post(this.Api+'/workerAdd', { data:this.hab});
      
      console.log((await env).data)
    }else{
      const env = axios.post(this.Api+'/workerEdit', {  idi:this.action,
      data:this.hab});
      
      console.log((await env).data)
    }
  }
  window.history.go(-1);
}

}
