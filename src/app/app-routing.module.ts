import { HomeComponent } from './comp/login/home.component';
import { AppComponent } from './app.component';
import { Page404Component } from './comp/page404/page404.component';
import { TraEditComponent } from './comp/trabajadores/tra-edit/tra-edit.component';
import { TraComponent } from './comp/trabajadores/tra/tra.component';
import { EdithComponent } from './comp/edith/edith.component';
import { SegundoComponent } from './comp/segundo/segundo.component';
import { HabComponent } from './comp/hab/hab.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckloginGuard } from './guard/checklogin.guard';
import { ReadyloginGuard } from './guard/readylogin.guard';


const routes: Routes = [ 
  {path:"", component: HomeComponent,canActivate: [ReadyloginGuard]},
  {path:"habitaciones", component: HabComponent,canActivate: [CheckloginGuard]},
  {path:"Perfil", component: SegundoComponent,canActivate: [CheckloginGuard]},
  {path:"trabajadores", component: TraComponent,canActivate: [CheckloginGuard]},
  {path:"EditarTrabajador/:documento", component: TraEditComponent,canActivate: [CheckloginGuard]},
  {path:"EditarHabitacion/:numero", component: EdithComponent,canActivate: [CheckloginGuard]},
  {path:"**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
