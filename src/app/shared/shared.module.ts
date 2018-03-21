import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';


@NgModule({

    imports: [
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent 
    ],
    exports:[
        HeaderComponent,
        SidebarComponent,
        BreadcrumsComponent      
    ]

})
export class SharedModule{}