import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { HobbyListComponent } from './hobby-list.component';
import { hobbyRouting } from './hobby.routing';

import { HobbyService } from './hobby.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    hobbyRouting
  ],
  declarations: [
      HobbyListComponent
  ],

  providers: [
      HobbyService
  ]
})

export class HobbyModule {

}