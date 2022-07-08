import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Entries } from './entriesInterface';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorAndTitleService {

  constructor( private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content Type' : 'application/json'})
  }

  private authorEntriesUrl = 'api/authorEntries'

  //GET: gets all initial author and title data from the in-app-data-service
  getEntries(): Observable<Entries[]> {
    return this.http.get<Entries[]>(this.authorEntriesUrl)
    .pipe(
      catchError(this.handleError<Entries[]>('getEntries', []))
    )
  }

  //ERROR HANDLER
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }

}
