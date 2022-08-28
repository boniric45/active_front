import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public client!: client[];
  public editClient!: client;
  public deleteClient!: client;

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.getClient();
  }

  public getClient(): void {
    this.clientService.getClient().subscribe(
      (response: client[]) => {
        this.client = response;
        console.log(this.client);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchClient(key: string): void {
    console.log(key);
    const results: client[] = [];
    for (const client of this.client) {
      if (client.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || client.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || client.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
        ) {
        results.push(client);
      }
    }
    this.client = results;
    if (results.length === 0 || !key) {
      this.getClient();
    }
  }
  
}
