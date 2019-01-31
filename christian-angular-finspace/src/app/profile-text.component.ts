import { Component, Input } from '@angular/core';
import { ScrollingVisibility } from '@angular/cdk/overlay';

@Component({
  selector: 'app-profile-text-component',
  templateUrl: './profile-text.component.html',
  styleUrls: ['./app.component.css']
})
export class ProfileTextComponent {
    @Input() visiblity = 'centered-non-visbile';
    @Input() name: string;
}
