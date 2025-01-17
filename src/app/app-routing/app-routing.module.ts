import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from '../app.component';
import {MainPageComponent} from '../components/main-page/main-page.component';
import {ContactPageComponent} from '../components/contact-page/contact-page.component';
import {ExtracurricularPageComponent} from '../components/extracurricular-page/extracurricular-page.component';
import {ProfessionalPageComponent} from '../components/professional-page/professional-page.component';
import {HobbiesComponent} from '../components/hobbies/hobbies.component';
import {InterestsComponent} from '../components/interests/interests.component';
import {ResearchExperienceComponent} from '../components/research-experience/research-experience.component';

const appRoutes: Routes = [
  { path: 'home-page',
    pathMatch: 'full',
    redirectTo: ''},
  {path: '', component: MainPageComponent, data: {animation: 'MainPageComponent'}},
  {path: 'contact-page', component: ContactPageComponent, data: {animation: 'ContactPageComponent'}},
  {path: 'extracurricular-page', component: ExtracurricularPageComponent, data: {animation: 'ExtracurricularPageComponent'}},
  {path: 'professional-page', component: ProfessionalPageComponent, data: {animation: 'ProfessionalPageComponent'}},
  {path: 'interests-page', component: InterestsComponent, data: {animation: 'InterestsComponent'}},
  {path: 'hobbies-page', component: HobbiesComponent, data: {animation: 'HobbiesComponent'}},
  {path: 'research-page', component: ResearchExperienceComponent, data: {animation: 'ResearchExperienceComponent'}},
  {path: '**', component: MainPageComponent, data: {animation: 'MainPageComponent'}}
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

