import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client-view',
   templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})

export class ClientViewComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }


  
}


