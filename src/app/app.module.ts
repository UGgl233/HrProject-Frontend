import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OnboardComponent } from './onboard/onboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PersonalinfoComponent } from './homepage/personalinfo/personalinfo.component';
import { VisastatusComponent } from './homepage/visastatus/visastatus.component';
import { HousingComponent } from './homepage/housing/housing.component';
import { PreonboardComponent } from './onboard/preonboard/preonboard.component';
import { OnboardingComponent } from './onboard/onboarding/onboarding.component';
import { OnboardingdocumentsComponent } from './onboard/onboardingdocuments/onboardingdocuments.component';
import { PostonboardComponent } from './onboard/postonboard/postonboard.component'
import { AppService } from './app-service.service';
import { AuthGuard } from './auth-guard.service';
import { DownloadFileComponent } from './homepage/visastatus/download-file/download-file.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LogoutComponent } from './homepage/logout/logout.component';
import { FacilityReportingComponent } from './homepage/facility-reporting/facility-reporting.component';
import { HousingDetailsComponent } from './homepage/housing-details/housing-details.component';
import { HireComponent } from './homepage/hire/hire.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OnboardComponent,
    HomepageComponent,
    PersonalinfoComponent,
    VisastatusComponent,
    HousingComponent,
    PreonboardComponent,
    OnboardingComponent,
    OnboardingdocumentsComponent,
    PostonboardComponent,
    DownloadFileComponent,
    ErrorpageComponent,
    LogoutComponent,
    FacilityReportingComponent,
    HousingDetailsComponent,
    HireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [AppService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
