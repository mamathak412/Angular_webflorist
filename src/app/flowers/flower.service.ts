import { Injectable } from '@angular/core';
import { MessageService } from '../message.service';
import { FLOWERS } from '../mock-flowers';
import { Flower } from './flower';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

   private flowersAddUrl = 'http://135.254.163.44:9002/webflorist/add';  

   private flowersListUrl = 'http://135.254.163.44:9002/webflorist/list';  

   private flowers : Flower[] = [];

  constructor(private messageService : MessageService, private httpClient : HttpClient) { }

  /** GET heroes from the server */
getFlowers(): Observable<Flower[]> {
  return this.httpClient.get<Flower[]>(this.flowersListUrl)
  .pipe(
    catchError(this.handleError<Flower[]>('getHeroes', []))
  );
}

/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add(`FlowerService: ${message}`);
}

}


