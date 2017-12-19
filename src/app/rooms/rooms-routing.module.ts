import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  { path: 'rooms', component: RoomsComponent }
];

export const RoomsRouting: ModuleWithProviders = RouterModule.forChild(routes);
