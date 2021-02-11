import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ReadyloginGuard implements CanActivate {
  constructor(public data: DataService, public router: Router){}
  canActivate(): boolean {
    if(this.data.ok==false){
      return true;
    }else{
      return false;
    }
    
  }
  
}
