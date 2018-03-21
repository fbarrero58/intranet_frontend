import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { FormsModule }   from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';
import { RegistroHorasComponent } from './registro-horas/registro-horas.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
    
    declarations: [
        PagesComponent,
        DashboardComponent,
        RegistroHorasComponent,
        PerfilComponent
    ],
    exports:[
        PagesComponent,
        DashboardComponent ,
        RegistroHorasComponent ,
        PerfilComponent     
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]

})
export class PageModule{}