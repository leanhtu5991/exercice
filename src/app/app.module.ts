import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgGridModule } from 'ag-grid-angular/main';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainLeftComponent } from './components/main-left/main-left.component';
import { MainRightComponent } from './components/main-right/main-right.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AvancementComponent } from './components/avancement/avancement.component';
import { AppRoutingModule} from './app-routing.module';
import { DescriptionComponent } from './components/description/description.component';
import { StaffingComponent } from './components/staffing/staffing.component';
import { DocumentComponent } from './components/document/document.component';
import { ContactComponent } from './components/contact/contact.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { PointageComponent } from './components/pointage/pointage.component';
import { GestionlivraisonComponent } from './components/gestionlivraison/gestionlivraison.component';
import { PlanningprojetComponent } from './components/planningprojet/planningprojet.component';
import { GestionreunionComponent } from './components/gestionreunion/gestionreunion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLeftComponent,
    MainRightComponent,
    AvancementComponent,
    DescriptionComponent,
    StaffingComponent,
    DocumentComponent,
    ContactComponent,
    TodolistComponent,
    PointageComponent,
    GestionlivraisonComponent,
    PlanningprojetComponent,
    GestionreunionComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    AgGridModule.withComponents([MainRightComponent]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
