import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from '../app.component';
import {MainPageComponent} from '../components/main-page/main-page.component';
import {ContactPageComponent} from '../components/contact-page/contact-page.component';
import {ExtracurricularPageComponent} from '../components/extracurricular-page/extracurricular-page.component';
import {HobbiesInterestsPageComponent} from '../components/hobbies-interests-page/hobbies-interests-page.component';
import {ProfessionalPageComponent} from '../components/professional-page/professional-page.component';

const appRoutes: Routes = [
  { path: 'home-page',
    pathMatch: 'full',
    redirectTo: ''},
  {path: '', component: MainPageComponent},
  {path: 'contact-page', component: ContactPageComponent},
  {path: 'extracurricular-page', component: ExtracurricularPageComponent},
  {path: 'hobbies-interests-page', component: HobbiesInterestsPageComponent},
  {path: 'professional-page', component: ProfessionalPageComponent},
  {path: '**', component: MainPageComponent}
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

