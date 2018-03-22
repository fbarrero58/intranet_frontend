import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: []
})
export class BreadcrumsComponent implements OnInit {

  label: string = '';
  lable_2: string = '';
  lable_3: string = '';

  constructor( public router: Router, public title: Title, public ar: ActivatedRoute ) { 
        this.get_data_router()
            .subscribe( evento => {
              this.label = evento.titulo;
              this.title.setTitle(this.label);
            });
  }

  ngOnInit() {
  }

  get_data_router(){
    
    return this.router.events
              .filter( evento => evento instanceof ActivationEnd)
              .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null )
              .map( (evento: ActivationEnd) => evento.snapshot.data );   

  }

}
