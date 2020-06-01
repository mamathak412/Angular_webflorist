import { Injectable } from '@angular/core';
import { FLOWERS } from '../../mock-flowers';
import { Flower } from '../flower';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../../message.service';

import { Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FlowerAddService {

   private flowersUrl = 'http://135.253.163.44:9002/webflorist/add/';  

  constructor(private messageService : MessageService, private httpClient : HttpClient) { }

  add(flower : Flower) : Observable<Flower>{
    console.log("Inside add service" + flower.flowerName);
    
       console.log("after add service");
     return this.httpClient.post<Flower>(this.flowersUrl, flower, httpOptions);
  }
}
