import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import axios from "axios";
@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  constructor(public data:DataService) { }
  
  ngOnInit(): void {
    
  }
  saber () {
    alert("es : "+this.data.ok);
    this.data.ok=true;
  }

}
