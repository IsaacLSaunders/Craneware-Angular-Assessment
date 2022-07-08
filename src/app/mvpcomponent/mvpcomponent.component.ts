import { Component, OnInit } from '@angular/core';
import { AuthorAndTitleService } from '../author-and-title.service';
import { Entries } from '../entriesInterface';

@Component({
  selector: 'app-mvpcomponent',
  templateUrl: './mvpcomponent.component.html',
  styleUrls: ['./mvpcomponent.component.css']
})
export class MVPComponentComponent implements OnInit {

  entries: Entries[] = [];

  getEntries(): void {
    this.dataService.getEntries()
      .subscribe(entries => this.entries = entries)
  }

  constructor(private dataService: AuthorAndTitleService) { }

  ngOnInit(): void {
    this.getEntries()
  }

}
