import { Component, OnInit } from '@angular/core';
export type EditorType = 'housing-details' | 'facility-reporting';


@Component({
  selector: 'app-housing',
  templateUrl: './housing.component.html',
  styleUrls: ['./housing.component.css']
})
export class HousingComponent implements OnInit {

  editor: EditorType = 'housing-details';

  constructor() { }

  ngOnInit(): void {
  }

  get showNameEditor() {
    return this.editor === 'housing-details';
  }

  get showProfileEditor() {
    return this.editor === 'facility-reporting';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }

}
