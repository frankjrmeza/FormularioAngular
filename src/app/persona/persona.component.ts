import { Component, OnInit } from '@angular/core';
import {Persona} from '../persona.modelo';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona = new Persona(1,'','','');
  listaPersonas : Persona[];
  constructor() { }

  ngOnInit() {

  }

  get currentpersona(){
    return JSON.stringify(this.persona);
  }

  agregar(){
    this.listaPersonas.push(this.persona);
  }

}
