import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { client } from '../model/client';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-console-view',
  templateUrl: './console-view.component.html',
  styleUrls: ['./console-view.component.scss']
})
export class ConsoleViewComponent implements OnInit {


  public client!: client[];
  public editClient!: client;
  public deleteClient!: client;
  
  constructor(private clientService: ClientService) { 

  }

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
  
  public onAddClient(addForm: NgForm): void {
    document.getElementById("add-client-form")?.click();
    this.clientService.addClient(addForm.value).subscribe(
      (response: client) => {
        console.log(response);
        this.getClient();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  
  public onUpdateClient(client: client): void {
    this.clientService.updateClient(client).subscribe(
      (response: client) => {
        console.log(response);
        this.getClient();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  
  public onDeleteClient(id: number ) {
    this.clientService.deleteClient(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getClient();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

  
  /**
   * onOpenModal
   */
  public onOpenModal(client: client | any, mode: string): void {
  
  const container = document.getElementById('main-controller');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle','modal');
  
  if( mode === 'add' ){
    button.setAttribute('data-toggle','#addClientModal');
  } 
  
  if(mode === 'edit'){
    this.editClient = client;
    button.setAttribute('data-toggle','#updateClientModal');
  }
  if(mode === 'delete'){
    this.deleteClient = client;
    button.setAttribute('data-toggle','deleteClientModal');
  }
  container!.appendChild(button);
  button.click();
  }
  

}
