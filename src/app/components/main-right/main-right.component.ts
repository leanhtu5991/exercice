import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GridOptions, GridApi } from 'ag-grid';
import { List } from '../../../data/List';
@Component({
  selector: 'app-main-right',
  templateUrl: './main-right.component.html',
  styleUrls: ['./main-right.component.css']
})
export class MainRightComponent implements OnInit {
  public columnDefs: any[];
  public gridOptions: GridOptions;
  public data: any[];
  _functionSelected:any;
  constructor() {
    this.columnDefs = [
      {headerName: 'FLOW', field: 'flow', suppressSizeToFit: true },
      {headerName: 'TYPE', field: 'type',  },
      {headerName: 'PHASE', field: 'phase'},
      {headerName: 'ETAPE', field: 'etape'},
      {headerName: 'DESIGNATION', field: 'designation'},
      {headerName: 'ETAT', field: 'etat'},
      {headerName: 'REDA', field: 'reda'},
      {headerName: 'VERL', field: 'verl'},
      {headerName: 'APPR', field: 'appr'}
    ];
    this._functionSelected = {'name':'Avancement', 'detail':"Visualisation et suivi de l'ancement", 'url':'avancement'};
    this.data = [
      { flow: 'S1', type: 'PR', phase: '200', etape: '204', designation:'Ouverture des capots', etat:'BPO', reda:'PCA', verl:'BEN', appr:'CMA' },
      { flow: 'S1', type: 'PR', phase: '400', etape: '402', designation:'Mise en place des vérins', etat:'PREL', reda:'GDU', verl:'PDU', appr:'CMA'},
      { flow: 'G2', type: 'DSI', phase: '100', etape: '108', designation:'Preparation', etat:'BPO', reda:'GDU', verl:'PCA', appr:'ABC' },
      { flow: 'G2', type: 'EMM', phase: '100', etape: '101', designation:'Materiel installation de chantier', etat:'PREL', reda:'PCA', verl:'PDU', appr:'CMA' },
      { flow: 'S3', type: 'ADR', phase: '300', etape: '303', designation:'Analyse de risque', etat:'PREL', reda:'PCA', verl:'CMA', appr:'EBO' }
    ];
    this.gridOptions = {
      columnDefs: this.columnDefs,
      rowData: null,
      enableColResize: true,
      onGridReady: function(params) {
          params.api.sizeColumnsToFit();
      }
  };
  
  }

  ngOnInit() {
  }

}
