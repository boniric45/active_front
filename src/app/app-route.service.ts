import { Injectable, NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ClientViewComponent } from './client-view/client-view.component';
import { ConsoleViewComponent } from './console-view/console-view.component';
import { HeaderComponent } from './header/header.component';

const routes:Routes=[
  { path: 'add', component: ClientViewComponent},
  { path: '**', component: ConsoleViewComponent}

];
@NgModule({
imports:[
  RouterModule.forRoot(routes)
],
exports:[
  RouterModule
]

})
export class AppRouteService {
  constructor() {}
}
