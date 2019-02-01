import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./app.component.css']
})
export class ProfileComponent {
  @Input() nameInput = 'Tristan Miller';
  @Input() cityInput = 'Dallas, TX';
  @Input() cohortInput = 'C1';
  @Input() interestList: Array<string> = [];
  @Input() personalProfile = true;
  title = 'angular-finspace';
  isEditable = false;
  toggleEditable() {
    this.isEditable = !this.isEditable;
  }

}
