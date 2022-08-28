import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClientService } from './service/client.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClientViewComponent } from './client-view/client-view.component';
import { Route, Routes } from '@angular/router';
import { AppRouteService } from './app-route.service';
import { ConsoleViewComponent } from './console-view/console-view.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientViewComponent,
    ConsoleViewComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRouteService
  ],
  providers: [ClientService,AppRouteService],

  bootstrap: [AppComponent]
})
export class AppModule { }
