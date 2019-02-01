import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentContainerComponent } from './content-container.component';
import { ProfileComponent } from './profile.component';
import { RouterHelperComponent } from './router-helper.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'landingPage', pathMatch: 'full'},
  { path: 'landingPage', component: ContentContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
