import { Component, OnInit, Input } from '@angular/core';
import { ITareasGruposComponent } from './i-tareas-grupos/i-tareas-grupos.component';

@Component({
  selector: 't-ver-grupo',
  templateUrl: './ver-grupo.component.html',
  styleUrls: ['./ver-grupo.component.css']
})
export class VerGrupoComponent implements OnInit {

  @Input grupoAmostrar:string;

  constructor() { }

  ngOnInit() {
  }
grupoAmostrar = grupos.nombre;
}
