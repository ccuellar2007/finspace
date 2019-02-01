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
}
@Component({
  selector: 'app-portrait-list',
  templateUrl: './portrait-list.component.html',
  styleUrls: ['./app.component.css']
})
export class PortraitListComponent implements OnInit {
  profiles = [
    {picture: 'assets/images/_MG_6191.jpg', name: 'Christian Cuellar', market: 'SF'},
    {picture: 'assets/images/tristan.png', name: 'Tristan Miller', market: 'Dallas'},
    {picture: 'assets/images/bilal.png', name: 'Bilal Sattar', market: 'LA'},
    {picture: 'assets/images/trace.png', name: 'Trace Tschida', market: 'DC'},
    {picture: 'assets/images/joel.png', name: 'Joel Eliason', market: 'Chicago'},
    {picture: 'assets/images/stephen.png', name: 'Stephen Godderidge', market: 'Philadelphia'}
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
    console.log('portraitlist filter');
    console.log(value);
    this.internalCurrentFilter = value;
    this.filterProfiles();
    this.updatePictures();
    this.updatePictureNameMap();
    console.log(this.namePictureMap);
  }
  get currentFilter(): Filter {
    return this.internalCurrentFilter;
  }

  filterProfiles() {
    let newFilteredProfiles = this.profiles;
    console.log('internal filter');
    console.log(this.internalCurrentFilter);
    if (this.internalCurrentFilter.nameFilter !== '') {
      newFilteredProfiles = newFilteredProfiles.filter(profile => profile.name.indexOf(this.internalCurrentFilter.nameFilter) >= 0);
    }
    if (this.internalCurrentFilter.marketFilter !== '') {
      newFilteredProfiles = newFilteredProfiles.filter(profile => profile.market.indexOf(this.internalCurrentFilter.marketFilter) >= 0);
    }
    this.filteredProfiles = newFilteredProfiles;
    console.log('filteredProfiles');
    console.log(this.filteredProfiles);
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
