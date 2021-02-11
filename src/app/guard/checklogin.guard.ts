import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class CheckloginGuard implements CanActivate {
  constructor(public data: DataService, public router: Router){}
  canActivate():boolean {
    //return this.data.
    if(this.data.ok==false){
      window.location.replace('/');
      //this.router.navigate['/'];
    }
    return this.data.ok;
  }
  
}
