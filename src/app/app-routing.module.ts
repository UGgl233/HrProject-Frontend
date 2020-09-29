import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HireComponent } from './homepage/hire/hire.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HousingManagementComponent } from './homepage/housing-management/housing-management.component';
import { HousingComponent } from './homepage/housing/housing.component';
import { LogoutComponent } from './homepage/logout/logout.component';
import { PersonalinfoComponent } from './homepage/personalinfo/personalinfo.component';
import { DownloadFileComponent } from './homepage/visastatus/download-file/download-file.component';
import { VisastatusComponent } from './homepage/visastatus/visastatus.component';
import { LoginComponent } from './login/login.component';
import { OnboardComponent } from './onboard/onboard.component';
import { OnboardingComponent } from './onboard/onboarding/onboarding.component';
import { OnboardingdocumentsComponent } from './onboard/onboardingdocuments/onboardingdocuments.component';
import { PostonboardComponent } from './onboard/postonboard/postonboard.component';
import { PreonboardComponent } from './onboard/preonboard/preonboard.component';
import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';

// @TODO: Add Auth Guard
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'homepage',
    component: HomepageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'personalinfo',
        component: PersonalinfoComponent,
        canDeactivate: [CanDeactivateGuardService],
      },
      {
        path: 'visastatus',
        component: VisastatusComponent,
        children: [{ path: 'download-file', component: DownloadFileComponent }],
      },
      {
        path: 'housing',
        component: HousingComponent,
      },
      {
        path: 'hire',
        component: HireComponent,
      },
      {
        path: 'housingmanagement',
        component: HousingManagementComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
    ],
  },
  {
    path: 'onboard',
    component: OnboardComponent,
    children: [
      {
        path: '',
        component: PreonboardComponent,
      },
      {
        path: 'preonboard',
        component: PreonboardComponent,
      },
      {
        path: 'postonboard',
        component: PostonboardComponent,
      },
      {
        path: 'onboarding',
        component: OnboardingComponent,
      },
      {
        path: 'onboardingdocuments',
        component: OnboardingdocumentsComponent,
      },
    ],
  },
  { path: '**', component: ErrorpageComponent },
  // @TODO: Add Page-Not-Found component
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
