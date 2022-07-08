import { Component, OnInit } from '@angular/core';
import { AuthorAndTitleService } from '../author-and-title.service';
import { Entries } from '../entriesInterface';

@Component({
  selector: 'app-mvpcomponent',
  templateUrl: './mvpcomponent.component.html',
  styleUrls: ['./mvpcomponent.component.css']
})
export class MVPComponentComponent implements OnInit {
  
  constructor(private dataService: AuthorAndTitleService) { }

  entries: Entries[] = [];

  getEntries(): void {
    this.dataService.getEntries()
      .subscribe(entries => this.entries = entries)
  }

  ngOnInit(): void {
    this.getEntries()
  }

}
