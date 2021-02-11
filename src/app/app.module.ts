import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegundoComponent } from './comp/segundo/segundo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HabComponent } from './comp/hab/hab.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from "@angular/material/icon";
import { EdithComponent } from './comp/edith/edith.component'
import { MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { TraComponent } from './comp/trabajadores/tra/tra.component';
import { TraEditComponent } from './comp/trabajadores/tra-edit/tra-edit.component';
import { Page404Component } from './comp/page404/page404.component';
import { HomeComponent } from './comp/login/home.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    SegundoComponent,
    HabComponent,
    EdithComponent,
    TraComponent,
    TraEditComponent,
    Page404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSelectModule,
    AngularFireStorageModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
