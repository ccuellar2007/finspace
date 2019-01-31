import { Component } from '@angular/core';

@Component({
  selector: 'app-portrait-list',
  templateUrl: './portrait-list.component.html',
  styleUrls: ['./app.component.css']
})
export class PortraitListComponent {
  pictures = ['assets/images/_MG_6191.jpg', 'assets/images/tristan.png', 'assets/images/bilal.png',
  'assets/images/trace.png', 'assets/images/joel.png', 'assets/images/stephen.png'];
  namePictureMap = {
    'assets/images/_MG_6191.jpg': 'Christian Cuellar',
    'assets/images/tristan.png': 'Tristan Miller',
    'assets/images/bilal.png': 'Bilal Sattar',
    'assets/images/trace.png': 'Trace Tschida',
    'assets/images/joel.png': 'Joel Eliason',
    'assets/images/stephen.png': 'Stephen Godderidge'
  };
}
