import { Component, Input, OnInit } from '@angular/core';
class Filter {
  nameFilter: string;
  marketFilter: string;
  interestFilter: string;
}
class Profile {
  picture: string;
  name: string;
  market: string;
  interests: Array<string>;
}
@Component({
  selector: 'app-portrait-list',
  templateUrl: './portrait-list.component.html',
  styleUrls: ['./app.component.css']
})
export class PortraitListComponent implements OnInit {
  profiles = [
    {picture: 'assets/images/_MG_6191.jpg', name: 'Christian Cuellar', market: 'SF', interests: ['Basketball']},
    {picture: 'assets/images/tristan.png', name: 'Tristan Miller', market: 'Dallas', interests: ['Fishing', 'Books']},
    {picture: 'assets/images/bilal.png', name: 'Bilal Sattar', market: 'LA', interests: ['Basketball']},
    {picture: 'assets/images/trace.png', name: 'Trace Tschida', market: 'DC', interests: ['Art', 'Music']},
    {picture: 'assets/images/joel.png', name: 'Joel Eliason', market: 'Chicago', interests: ['Art']},
    {picture: 'assets/images/stephen.png', name: 'Stephen Godderidge', market: 'Philadelphia', interests: ['Books', 'Music']}
  ];
  namePictureMap = {
    'assets/images/_MG_6191.jpg': 'Christian Cuellar',
    'assets/images/tristan.png': 'Tristan Miller',
    'assets/images/bilal.png': 'Bilal Sattar',
    'assets/images/trace.png': 'Trace Tschida',
    'assets/images/joel.png': 'Joel Eliason',
    'assets/images/stephen.png': 'Stephen Godderidge'
  };
  filteredProfiles: Array<Profile>;
  pictures = ['assets/images/_MG_6191.jpg', 'assets/images/tristan.png', 'assets/images/bilal.png',
  'assets/images/trace.png', 'assets/images/joel.png', 'assets/images/stephen.png'];
  private internalCurrentFilter: Filter;
  @Input() set currentFilter(value: Filter) {
    this.internalCurrentFilter = value;
    this.filterProfiles();
    this.updatePictures();
    this.updatePictureNameMap();
  }
  get currentFilter(): Filter {
    return this.internalCurrentFilter;
  }

  checkInterestList(interest, interestList) {
    let containsInterest = false;
    interestList.forEach(i => {
      if (i.indexOf(interest) >= 0) {
        containsInterest = true;
      }
    });
    return containsInterest;
  }
  filterProfiles() {
    let newFilteredProfiles = this.profiles;
    if (this.internalCurrentFilter.nameFilter !== '') {
      newFilteredProfiles = newFilteredProfiles.filter(profile => profile.name.indexOf(this.internalCurrentFilter.nameFilter) >= 0);
    }
    if (this.internalCurrentFilter.marketFilter !== '') {
      newFilteredProfiles = newFilteredProfiles.filter(profile => profile.market.indexOf(this.internalCurrentFilter.marketFilter) >= 0);
    }
    if (this.internalCurrentFilter.interestFilter !== '') {
      newFilteredProfiles = newFilteredProfiles.filter(profile => this.checkInterestList(this.internalCurrentFilter.interestFilter, profile.interests));
    }
    this.filteredProfiles = newFilteredProfiles;
  }

  updatePictures() {
    this.pictures = this.filteredProfiles.map(profile => profile.picture);
  }

  updatePictureNameMap() {
    let newMap = {};
    this.profiles.forEach(profile => {
      newMap[profile.picture] = profile.name;
    });
    // @ts-ignore
    this.namePictureMap = newMap;
  }

  ngOnInit() {
    this.filteredProfiles = this.profiles;
  }
}
