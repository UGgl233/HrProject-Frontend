import { Router } from '@angular/router';
import { FileService } from 'src/app/services/file.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  userId: string;

  constructor() {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
  }
}
