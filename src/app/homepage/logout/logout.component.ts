import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.appService.logout();
    const redirectUrl = 'login';
    this.router.navigate([redirectUrl]);
  }

}
