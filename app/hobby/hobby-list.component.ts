import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Hobby, HobbyService } from './hobby.service';

@Component ({
    template: `    
      <h1>hobby list</h1>
      <ul class="items">
      <li *ngFor="let hobby of hobbyes">
        <span class="badge">{{hobby.id}}</span> {{hobby.name}}
      </li>
    </ul>
    <router-outlet></router-outlet>
    `
})

export class HobbyListComponent implements OnInit{
    
    // hobbyes: [{
    //     "hobby": "running"
    // },{
    //     "hobby": "playing basketball"
    // },{
    //     "hobby": "ping bang"
    // }
    // ];
    hobbyes: Hobby[];
    // public selectedId: number;

    constructor(
        private service: HobbyService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
          // this.selectedId = params['id'];
          this.service.getHobbyes()
            .then(hobbyes => this.hobbyes = hobbyes);
        });        
        // this.service.getHobbyes();
        // console.log("service data", this.service.getHobbyes().then(hobbyes => this.hobbyes = hobbyes));
        // this.service.getHobbyes().then(
        //     hobbyes => this.hobbyes = hobbyes
        // );       
    }

}