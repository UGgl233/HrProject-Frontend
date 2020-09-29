import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postonboard',
  templateUrl: './postonboard.component.html',
  styleUrls: ['./postonboard.component.css']
})

export class PostonboardComponent implements OnInit {

  //value of whether HR accepts or rejects an application
  approved: boolean = true; 

  constructor() { }

  ngOnInit(): void {
  }

}
