import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainPageComponent} from './components/main-page/main-page.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';

import {A11yModule} from '@angular/cdk/a11y';
import {ObserversModule} from '@angular/cdk/observers';
import {BidiModule} from '@angular/cdk/bidi';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {PortalModule} from '@angular/cdk/portal';
import {PlatformModule} from '@angular/cdk/platform';

import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ExtracurricularPageComponent } from './components/extracurricular-page/extracurricular-page.component';
import { ProfessionalPageComponent } from './components/professional-page/professional-page.component';
import { HobbiesInterestsPageComponent } from './components/hobbies-interests-page/hobbies-interests-page.component';
import { ProfessionalQuickenComponent } from './components/professional-page/professional-quicken/professional-quicken.component';
import { ProfessionalAmexComponent } from './components/professional-page/professional-amex/professional-amex.component';
import { ProfessionalResearchMradsComponent } from './components/professional-page/professional-research-mrads/professional-research-mrads.component';
import { ProfessionalResearchYspComponent } from './components/professional-page/professional-research-ysp/professional-research-ysp.component';
import { ProfessionalTechnicalSkillsComponent } from './components/professional-page/professional-technical-skills/professional-technical-skills.component';
import { ProfessionalTechnicalProjectsAndSetupsComponent } from './components/professional-page/professional-technical-projects-and-setups/professional-technical-projects-and-setups.component';
import { HobbyArtComponent } from './components/hobbies-interests-page/hobby-art/hobby-art.component';
import { HobbyFitnessComponent } from './components/hobbies-interests-page/hobby-fitness/hobby-fitness.component';
import { HobbyMusicComponent } from './components/hobbies-interests-page/hobby-music/hobby-music.component';
import { InterestComputationalCognitionComponent } from './components/hobbies-interests-page/interest-computational-cognition/interest-computational-cognition.component';
import { InterestAiApproachesComponent } from './components/hobbies-interests-page/interest-ai-approaches/interest-ai-approaches.component';
import { InterestAiApplicationsComponent } from './components/hobbies-interests-page/interest-ai-applications/interest-ai-applications.component';
import { EducationUmichComponent } from './components/extracurricular-page/education-umich/education-umich.component';
import { EducationCbhsComponent } from './components/extracurricular-page/education-cbhs/education-cbhs.component';
import { ExtracurricularShpeComponent } from './components/extracurricular-page/extracurricular-shpe/extracurricular-shpe.component';
import { ExtracurricularMradsComponent } from './components/extracurricular-page/extracurricular-mrads/extracurricular-mrads.component';
import {MatTreeModule} from '@angular/material/tree';


@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,

    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatTreeModule
  ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    SideNavComponent,
    MainPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    ExtracurricularPageComponent,
      EducationUmichComponent,
      EducationCbhsComponent,
      ExtracurricularShpeComponent,
      ExtracurricularMradsComponent,
    ProfessionalPageComponent,
      ProfessionalQuickenComponent,
      ProfessionalAmexComponent,
      ProfessionalResearchMradsComponent,
      ProfessionalResearchYspComponent,
      ProfessionalTechnicalSkillsComponent,
      ProfessionalTechnicalProjectsAndSetupsComponent,
    HobbiesInterestsPageComponent,
      HobbyArtComponent,
      HobbyFitnessComponent,
      HobbyMusicComponent,
      InterestComputationalCognitionComponent,
      InterestAiApproachesComponent,
      InterestAiApplicationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
