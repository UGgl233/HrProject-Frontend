import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  login(userId: number){
    localStorage.setItem('userId', userId.toString());
  }

  logout(){
    localStorage.removeItem('userId');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }
}