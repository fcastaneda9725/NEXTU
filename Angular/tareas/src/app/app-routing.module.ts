import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component'
import { InicioComponent } from './inicio/inicio.component'

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'nueva-tarea', component: NuevaTareaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TareasRoutingModule { }
