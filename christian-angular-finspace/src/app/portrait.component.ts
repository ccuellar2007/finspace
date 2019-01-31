import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portrait-component',
  templateUrl: './portrait.component.html',
  styleUrls: ['./app.component.css']
})
export class PortraitComponent {
  @Input() imgSrc = 'assets/images/';
  @Input() map: {string: string};
  childName: string;
  state = 'centered-non-visible';

  showText() {
    // Cause the profile text to show
    this.state = 'centered-visible';
    this.childName = this.map[this.imgSrc];
  }
  hideText() {
    // Hide the profile text
    this.state = 'centered-non-visible';
  }
  test() {
    console.log('clicked');
  }
}
