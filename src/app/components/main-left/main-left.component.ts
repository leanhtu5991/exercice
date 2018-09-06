import { Component, OnInit, OnChanges,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { List } from '../../../data/List';
@Component({
  selector: 'app-main-left',
  templateUrl: './main-left.component.html',
  styleUrls: ['./main-left.component.css']
})
export class MainLeftComponent implements OnInit {
  public list: List[];
  public listFunction ='row cache';
  public functionSelected:List;
  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {
    this.list=[
      {'name':'Description', 'detail':'Detail et information du projet', 'url':'description'},
      {'name':'Staffing', 'detail':'Organisation operationnel du projet', 'url':'staffing'},
      {'name':'Document', 'detail':'Gestion des documents du projet', 'url':'document'},
      {'name':'Avancement', 'detail':"Visualisation et suivi de l'ancement", 'url':'avancement'},
      {'name':'Contact', 'detail':'Carnet de contact interne et externe', 'url':'contact'},
      {'name':'To Do List', 'detail':'Gestionaire de tache interne', 'url':'todolist'},
      {'name':'Pointage', 'detail':'Suivi du pointage par projet', 'url':'pointage'},
      {'name':'Gestion des livraisons', 'detail': 'Suivi des livraisons du projet', 'url':'gestionlivraison'},
      {'name':'Planning projet', 'detail':'Suivi du planning en phase projet', 'url':'planning'},
      {'name':'Gestions des reunions', 'detail':'Suivi des reunions du projet', 'url':'gestionreunion'}
    ];
    
  }

  public oneSelected(item){
    
    this.functionSelected = item;
    this.valueChange.emit(this.functionSelected);
    this.router.navigate(['/'+this.functionSelected.url]);
  }
  public openFunction(){
    if(this.listFunction !='row'){
      this.listFunction ='row';
    }
    else
      this.listFunction = 'row cache';
  }


  ngOnInit() {
    //this.valueChange.emit('');
  }

}
