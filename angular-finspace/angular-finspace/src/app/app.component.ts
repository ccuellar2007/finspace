import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    profileName = 'Tristan M';
    cName = 'Dallas';
    clName = 'C2';
    presetInterests = ['Football',  'Basketball', 'Books',  'Art',  'Music'];
    personalProfile = true;
}
