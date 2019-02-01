import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentContainerComponent } from './content-container.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '', component: ContentContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
