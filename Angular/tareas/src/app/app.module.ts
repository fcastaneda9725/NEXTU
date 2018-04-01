import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material'

import { TareasRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { InicioComponent } from './inicio/inicio.component';
import { ITareasPendientesComponent } from './i-tareas-pendientes/i-tareas-pendientes.component';
import { ITareasHoyComponent } from './i-tareas-hoy/i-tareas-hoy.component';
import { ITareasGruposComponent } from './i-tareas-grupos/i-tareas-grupos.component';
import { NuevaTareaComponent } from './nueva-tarea/nueva-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    InicioComponent,
    ITareasPendientesComponent,
    ITareasHoyComponent,
    ITareasGruposComponent,
    NuevaTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TareasRoutingModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
