import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Visa } from 'src/app/models/visa-status';
import { FileService } from 'src/app/services/file.service';
import { VisaStatusService } from 'src/app/services/visa-status.service';

@Component({
  selector: 'app-hr-file-list',
  templateUrl: './hr-file-list.component.html',
  styleUrls: ['./hr-file-list.component.css']
})
export class HrFileListComponent implements OnInit {

  fileInfos: Observable<string[]>;
  personalDocument: Visa[];
  employee: Visa;
  id: number;
  dayLeft: number;

  expiration: string;

  // get data(): string {
  //   this.expiration = this.visaStatusService.sharedData;
  //   console.log(this.expiration);
  //   return this.expiration;
  // }

  constructor(
    private fileService: FileService,
    private visaStatusService: VisaStatusService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fileInfos = this.fileService.getFiles();
    this.getName();
    this.expiration = this.visaStatusService.sharedData;
  }

  getName() {
    this.fileService
      .getPersonalDocumentList()
      .subscribe((data) => (this.personalDocument = data));
  }

  getEmployeeDetail(name: string) {
    this.router.navigate(['Details', name]);
  }

  onSelect(employee: Visa) {
    this.employee = employee;
  }
}
