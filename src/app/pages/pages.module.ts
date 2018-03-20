import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';
import { RegistroHorasComponent } from './registro-horas/registro-horas.component';


@NgModule({
    
    declarations: [
        PagesComponent,
        DashboardComponent,
        RegistroHorasComponent
    ],
    exports:[
        PagesComponent,
        DashboardComponent ,
        RegistroHorasComponent      
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]

})
export class PageModule{}