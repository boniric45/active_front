
import { EventEmitter, Injectable, Output } from "@angular/core";
import { Observable } from "rxjs";
import { client } from "../model/client";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";



@Injectable({providedIn:'root'})
export class ClientService {

private apiServeurUrl=environment.apiBaseUrl;

constructor(private http : HttpClient){}

    public getClient(): Observable<client[]> {
        return this.http.get<client[]>(`${this.apiServeurUrl}/client/all`);
    }

    public addClient(client: client): Observable<client> {
        return this.http.post<client>(`${this.apiServeurUrl}/client/add`, client);       
    }

    public updateClient(client: client): Observable<client> {
        return this.http.put<client>(`${this.apiServeurUrl}/client/update`, client);       
    }
    
    public deleteClient(clientId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServeurUrl}/client/delete/${clientId}`);       
    }


}



