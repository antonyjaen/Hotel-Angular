import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { DataService } from '../../services/data.service';
import {AngularFireStorage} from "@angular/fire/storage";
import axios from "axios";
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-edith',
  templateUrl: './edith.component.html',
  styleUrls: ['./edith.component.css']
})
export class EdithComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute,public data: DataService) { }

  hab:{numero:string,descripcion:string,piso:string,caracteristicas:string,precio:string,estado:string,tipo:string,img};
  preview=false;
  txtimg;
  sel;
  action;
  foto;
  Api = this.data.api;

  urlcloud="https://api.cloudinary.com/v1_1/di0jwecs8/image/upload";
  preset='d9rpj7g4';

cargar(e){
  try{
    const img= e.target.files[0];
    this.foto=img;
    this.hab.img=img;

    let reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);

    this.preview=true;
    reader.onload = (e)=>{
      this.hab.img=e.target.result;
    }
    this.txtimg=img.name;
    this.hab.img= e.target.files[0];
  }catch(i)
  {
    alert("Error");
  }
  
}

  
  
  async comprovar(){
    if(confirm("Desea Continuar ? ")){
      const file = this.hab.img;
      var formData = new FormData();
      formData.append('file',file);
      formData.append('upload_preset',this.preset);
      //TODO : arreglar las img
      
      const rut = await axios.post(this.urlcloud, formData,{
        headers:{
          'Content-Type':'multipart/form-data'
        }
      });
      this.hab.img=rut.data.secure_url;
      if(this.action==0){
        const env = await axios.get(this.Api+"/habitAdd", {params:{data:this.hab}});
        alert((await env).data);

      }else{
        const env = axios.post(this.Api+'/habitEdit', {idi:this.action,data:this.hab });
        alert((await env).data);
      }
    }
      //this.router.
      window.history.go(-1);
  }
  
  async ngOnInit(): Promise<void> {
    if(this.rutaActiva.snapshot.params.numero=="Agregar"){
      this.hab={
        numero:"",
        descripcion:"",
        piso:"",
        caracteristicas:"",
        precio:"",
        estado:"",
        tipo:"",
        img:''
      };
        this.txtimg='No Hay Imagen'
        this.sel="";
        this.action=0;
        console.log(this.hab);
    }else{

       const env = axios.post(this.Api+'/habit/'+this.rutaActiva.snapshot.params.numero);
      
       this.hab = (await env).data; 

       this.sel=this.hab.estado;
        
       console.log(this.hab);
       this.action=this.rutaActiva.snapshot.params.numero;
       this.preview=true;

       if(this.hab.img==''){
        this.txtimg='No Hay Imagen';
       }else{
        this.txtimg='Seleccionado';
        //this.txtimg=this.hab.img;
       }
    }
  }

}
