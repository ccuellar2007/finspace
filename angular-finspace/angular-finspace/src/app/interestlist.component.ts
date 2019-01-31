import { Component, Input, OnInit } from '@angular/core';
class Interest {
  name: string;
  iconName: string;
  color: string;
  constructor(name, iconName, color) {
    this.name = name;
    this.iconName = iconName;
    this.color = color;
  }
}
@Component({
  selector: 'app-interest-list-component',
  templateUrl: './interestlist.component.html',
  styleUrls: ['./app.component.css']
})
export class InterestListComponent implements OnInit {
  @Input() personalProfile = true;
  dropdownText = 'Interests';
  interests: Array<Interest> = [
    {name: 'Football', iconName: 'football-ball', color: 'yellow'},
    {name: 'Basketball', iconName: 'basketball-ball', color: 'orange'},
    {name: 'Gaming', iconName: 'gamepad', color: 'deep-purple'},
    {name: 'Music', iconName: 'music', color: 'pink'},
    {name: 'Art', iconName: 'palette', color: 'red'},
    {name: 'Fishing', iconName: 'fish', color: 'green'},
    {name: 'Books', iconName: 'book', color: 'blue'},
  ];
  value = '';
  numCurrInterests = 0;
  dropdownValue: Interest;
  @Input() interestList: Array<string> = [];
  internalInterestList: Array<Interest> = [];
  ngOnInit() {
    this.initInterestList();
  }
  initInterestList() {
    this.interestList.forEach(interest => {
      let interestObj: Interest;
      this.interests.forEach(interestOption => {
        if (interestOption.name === interest) {
          interestObj = interestOption;
        }
      });
      this.internalInterestList.push(interestObj);
    });
  }
  checkListForInterest(interest) {
    let isAlreadyInList = false;
    this.internalInterestList.forEach(i => isAlreadyInList = (interest.name === i.name));
    return isAlreadyInList;
  }
  getLeftInterestList(): Array<Interest> {
    const newList = [];
    this.internalInterestList.forEach((el, i) => {
      if (i % 2 === 0) {
        newList.push(el);
      }
    });
    return newList;
  }
  getRightInterestList(): Array<Interest> {
    const newList = [];
    this.internalInterestList.forEach((el, i) => {
      if (i % 2 === 1) {
        newList.push(el);
      }
    });
    return newList;
  }
  addInterest(interest) {
    this.numCurrInterests += 1;
    if (! this.checkListForInterest(interest)) {
      this.internalInterestList.push(interest);
    }
  }
}
