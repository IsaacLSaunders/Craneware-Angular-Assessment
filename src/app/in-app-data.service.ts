import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InAppDataService implements InMemoryDbService {
  createDb(){
    const authorEntries = [
      {author: 'Ernest Hemingway', title: 'The Old Man and the Sea'},
      {author: 'Edgar Alan Poe', title: 'The Raven'},
      {author: 'Garth Nix', title: 'Clariel'}
    ]
    
    return {authorEntries}
  }

  constructor() { }
}
