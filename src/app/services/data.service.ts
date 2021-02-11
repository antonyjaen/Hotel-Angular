import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ok:boolean=false;
  api="https://my-api-flask.herokuapp.com"
  //api = "http://34.69.191.72"
  async login(us,pas){
    console.log(this.api);
    
    const env = await axios.post(this.api+'/log', {user:us,pas:pas});
      if(env.data== "no"){
        this.ok=false;
        return this.ok;
      }else{
        this.ok=true;
        return this.ok;
      }
  }
  constructor() { }
}
