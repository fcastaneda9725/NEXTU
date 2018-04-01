import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component'
import { InicioComponent } from './inicio/inicio.component'
import { VerGrupoComponent } from './ver-grupo/ver-grupo.component'

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'nueva-tarea', component: NuevaTareaComponent},
  { path: 'ver-grupo', component: VerGrupoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TareasRoutingModule { }
