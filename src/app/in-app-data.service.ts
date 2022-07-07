import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InAppDataService implements InMemoryDbService {
  createDb(){
    const authorEntries = [
      {author: 'Ernest Hemingway', books: ['The Old Man and the Sea',]}
    ]
    return {authorEntries}
  }

  constructor() { }
}
