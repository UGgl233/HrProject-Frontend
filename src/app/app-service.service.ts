import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  login(userId: number, username: string){
    localStorage.setItem('userId', userId.toString());
    localStorage.setItem('username', username);
  }

  logout(){
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
  }

  getUserId() {
    return localStorage.getItem('userId');
  }

  getUserName() {
    return localStorage.getItem('username');
  }
}