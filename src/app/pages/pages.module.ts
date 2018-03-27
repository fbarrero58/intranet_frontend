import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';
import { RegistroHorasComponent } from './registro-horas/registro-horas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';


@NgModule({
    
    declarations: [
        PagesComponent,
        DashboardComponent,
        RegistroHorasComponent,
        PerfilComponent,
        EducacionComponent,
        ExperienciaComponent
    ],
    exports:[
        PagesComponent,
        DashboardComponent ,
        RegistroHorasComponent ,
        PerfilComponent  ,
        EducacionComponent  ,
        ExperienciaComponent 
    ],
    imports:[
        BrowserModule,
        SharedModule,
        PAGES_ROUTES,
        ReactiveFormsModule,
        FormsModule
    ]

})
export class PageModule{}