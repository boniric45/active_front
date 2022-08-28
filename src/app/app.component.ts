import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { client } from './model/client';
import { ClientService } from './service/client.service';
import { NgForm } from '@angular/forms';
import { ClientViewComponent } from './client-view/client-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
 constructor(){}

  ngOnInit() {
  }




}
