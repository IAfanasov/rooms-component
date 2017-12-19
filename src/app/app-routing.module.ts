import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RoomsComponent } from './rooms/rooms/rooms.component';
import { RoomsRouting } from './rooms/rooms-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'rooms', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    RoomsRouting
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
