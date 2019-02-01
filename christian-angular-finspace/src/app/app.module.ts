import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { PortraitComponent } from './portrait.component';
import { PortraitListComponent } from './portrait-list.component';
import { SearchBarComponent } from './searchbar.component';
import { ProfileTextComponent } from './profile-text.component';
import { ContentContainerComponent } from './content-container.component';
import { ProfileComponent } from './profile.component';
import { InterestListComponent } from './interestlist.component';
import { RouterHelperComponent } from './router-helper.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatAutocompleteModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [
    PortraitComponent,
    PortraitListComponent,
    SearchBarComponent,
    ProfileTextComponent,
    ContentContainerComponent,
    ProfileComponent,
    InterestListComponent,
    RouterHelperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [RouterHelperComponent, ContentContainerComponent]
})
export class AppModule { }
