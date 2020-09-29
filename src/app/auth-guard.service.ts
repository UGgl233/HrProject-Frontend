import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppService } from './app-service.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public service: AppService, public router: Router) {}
  canActivate(): boolean {
    if (!this.service.getUserId()) {
      alert('Not signin yet, redirecting');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  // canActivate(): boolean {

  //   return true;
  // }
}
