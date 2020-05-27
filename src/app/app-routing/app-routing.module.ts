import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from '../app.component';
import {MainPageComponent} from '../components/main-page/main-page.component';
import {ContactPageComponent} from '../components/contact-page/contact-page.component';

const appRoutes: Routes = [
  { path: 'home-page',
    pathMatch: 'full',
    redirectTo: ''},
  {path: '', component: MainPageComponent},
  {path: 'contact-page', component: ContactPageComponent},
  {path: '**', component: MainPageComponent}
  // {path: 'social'},
  // {path: 'interests-hobbies'},
  // {path: 'professional'
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

