import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { FLOWERS } from '../mock-flowers';
import { Flower } from './flower';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

   private flowersUrl = 'http://localhost:8080/rest/webflorist/add';  

  constructor(private messageService : MessageService, private httpClient : HttpClient) { }

  
}
