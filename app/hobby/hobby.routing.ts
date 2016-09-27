import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { HobbyListComponent } from './hobby-list.component';

import { CanDeactivateGuard }    from '../can-deactivate-guard.service';

const hobbyRoutes: Routes = [
  {
    path: '',
    redirectTo: '/hobby',
    pathMatch: 'full'
  },
  {
    path: 'hobby',
    component: HobbyListComponent,
    // children: [

    // ]
  }
];

export const hobbyRouting: ModuleWithProviders = RouterModule.forChild(hobbyRoutes);