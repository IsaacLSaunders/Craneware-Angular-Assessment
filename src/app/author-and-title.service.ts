import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Entries } from './entriesInterface';
import { authorEntries } from './mock-data';


@Injectable({
  providedIn: 'root'
})
export class AuthorAndTitleService {

  // constructor( private http: HttpClient) { }

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content Type' : 'application/json'})
  // }

  // private authorEntriesUrl = 'api/authorEntries'

  getEntries(): Observable<Entries[]> {
    const entries = of(authorEntries);
    return entries;
  }

}
