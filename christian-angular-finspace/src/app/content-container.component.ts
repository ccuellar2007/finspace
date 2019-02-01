import { Component } from '@angular/core';
import { PortraitListComponent } from './portrait-list.component';
class Filter {
  nameFilter: string;
  marketFilter: string;
  interestFilter: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './content-container.component.html',
  styleUrls: ['./app.component.css']
})
export class ContentContainerComponent {
  currentFilter: Filter = {nameFilter: '', marketFilter: '', interestFilter: ''};

  updateFilter(filter) {
    this.currentFilter = filter;
  }
}
