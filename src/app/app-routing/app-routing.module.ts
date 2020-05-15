import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from '../app.component';
import {MainPageComponent} from '../components/main-page/main-page.component';

const appRoutes: Routes = [
  { path: '**', component: MainPageComponent }
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

