import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AvancementComponent } from './components/avancement/avancement.component';
import { ContactComponent } from './components/contact/contact.component';
import { DescriptionComponent } from './components/description/description.component';
import { DocumentComponent } from './components/document/document.component';
import { GestionlivraisonComponent } from './components/gestionlivraison/gestionlivraison.component';
import { GestionreunionComponent } from './components/gestionreunion/gestionreunion.component';
import { PlanningprojetComponent } from './components/planningprojet/planningprojet.component';
import { PointageComponent } from './components/pointage/pointage.component';
import { StaffingComponent } from './components/staffing/staffing.component';
import { TodolistComponent } from './components/todolist/todolist.component';

const routes: Routes = [
  { path: 'avancement', component: AvancementComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'description', component: DescriptionComponent},
  { path: 'document', component: DocumentComponent},
  { path: 'gestionlivraison', component: GestionlivraisonComponent},
  { path: 'gestionreunion', component: GestionreunionComponent},
  { path: 'planning', component: PlanningprojetComponent},
  { path: 'pointage', component: PointageComponent},
  { path: 'staffing', component: StaffingComponent},
  { path: 'todolist', component: TodolistComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [AvancementComponent, ContactComponent, DescriptionComponent, DocumentComponent, GestionlivraisonComponent, 
  GestionreunionComponent, PlanningprojetComponent, PlanningprojetComponent, PointageComponent, StaffingComponent, TodolistComponent];