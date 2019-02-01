import { Component, Input, Output, EventEmitter } from '@angular/core';
class Filter {
  nameFilter: string;
  marketFilter: string;
  interestFilter: string;
}
@Component({
  selector: 'app-search-bar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./app.component.css']
})
export class SearchBarComponent {
  NAME_STATE = 'NAME_STATE';
  MARKET_STATE = 'MARKET_STATE';
  INTEREST_STATE = 'INTEREST_STATE';
  currentState = this.NAME_STATE;
  NAME_OPTIONS = ['Tristan Miller', 'Christian Cuellar', 'Bilal Sattar', 'Trace Tschida', 'Stephen Godderidge', 'Joel Eliason'];
  MARKET_OPTIONS = ['Dallas', 'Houston', 'SF', 'LA', 'Seattle', 'Chicago', 'Atlanta', 'New York', 'DC', 'Philadelphia'];
  INTEREST_OPTIONS = ['Football', 'Basketball', 'Fishing', 'Art', 'Gaming', 'Music', 'Books'];
  currentSearch = '';
  nameFilter = '';
  marketFilter = '';
  interestFilter = '';
  @Output() filterChanged = new EventEmitter<Filter>();
  isNameFilterNotEmpty() {
    return (this.nameFilter !== '');
  }
  isMarketFilterNotEmpty() {
    return (this.marketFilter !== '');
  }
  isInterestFilterNotEmpty() {
    return (this.interestFilter !== '');
  }
  isNameToggled() {
    return this.currentState === this.NAME_STATE;
  }
  isMarketToggled() {
    return this.currentState === this.MARKET_STATE;
  }
  isInterestToggled() {
    return this.currentState === this.INTEREST_STATE;
  }
  getOptions() {
    switch (this.currentState) {
      case this.NAME_STATE:
        this.filterChanged.emit({nameFilter: this.currentSearch, marketFilter: this.marketFilter, interestFilter: this.interestFilter}); break;
      case this.MARKET_STATE:
        this.filterChanged.emit({nameFilter: this.nameFilter, marketFilter: this.currentSearch, interestFilter: this.interestFilter}); break;
      case this.INTEREST_STATE:
        this.filterChanged.emit({nameFilter: this.nameFilter, marketFilter: this.marketFilter, interestFilter: this.currentSearch}); break;
      default: break;
    }
    
    return this.getOptionsNotFiltered().filter(x => x.indexOf(this.currentSearch) >= 0);
  }
  getOptionsNotFiltered() {
    switch (this.currentState) {
      case this.NAME_STATE: return this.NAME_OPTIONS;
      case this.MARKET_STATE: return this.MARKET_OPTIONS;
      case this.INTEREST_STATE: return this.INTEREST_OPTIONS;
      default: return this.NAME_OPTIONS;
    }
  }
  toggleName() {
    switch (this.currentState) {
      case this.MARKET_STATE: this.marketFilter = this.currentSearch; this.nameFilter = ''; break;
      case this.INTEREST_STATE: this.interestFilter = this.currentSearch; this.nameFilter = ''; break;
      default: break;
    }
    this.currentState = this.NAME_STATE;
    this.currentSearch = '';
  }
  toggleMarket() {
    switch (this.currentState) {
      case this.NAME_STATE: this.nameFilter = this.currentSearch; this.marketFilter = ''; break;
      case this.INTEREST_STATE: this.interestFilter = this.currentSearch; this.marketFilter = ''; break;
      default: break;
    }
    this.currentState = this.MARKET_STATE;
    this.currentSearch = '';
  }
  toggleInterest() {
    switch (this.currentState) {
      case this.MARKET_STATE: this.marketFilter = this.currentSearch; this.interestFilter = ''; break;
      case this.NAME_STATE: this.nameFilter = this.currentSearch; this.interestFilter = ''; break;
      default: break;
    }
    this.currentState = this.INTEREST_STATE;
    this.currentSearch = '';
  }

}
