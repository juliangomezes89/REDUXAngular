import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent implements OnInit {
  contador:number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('contador').subscribe( contador => this.contador = contador);
  }

  multiplicar(){
    this.store.dispatch(actions.multiplicar({ numero: 2 }));
  }

  dividir(){
    this.store.dispatch(actions.dividir({ numero: 2}));
  }

}
