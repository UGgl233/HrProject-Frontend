import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Visa } from 'src/app/models/visa-status';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Visa;
  dayLeft: number;
  fileInfos: Observable<string[]>;
  fileName: [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fileService: FileService
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      console.log(params);
      if (params['name'] !== undefined) {
        let name = params['name'];

        this.fileService
          .getEmployeeDetail(name)
          .subscribe((data) => (this.employee = data));
      }
    });

    this.route.params.forEach((params: Params) => {
      if (params['name'] !== undefined) {
        let name = params['name'];
        this.fileService
          .getFileByCreateBy(name)
          .subscribe((data) => (this.fileName = data));
      }
    });
    this.fileInfos = this.fileService.getFiles();
  }

  getDaysLeft() {
    var current = new Date().toLocaleDateString();
    console.log(current);
    var expirationDate = this.employee.modificationDate.toLocaleString();
    console.log(expirationDate);

    var currentArray: string[] = current.split('/');
    var ExpireArray: string[] = expirationDate.split('-');
    console.log(currentArray[0]);
    console.log(ExpireArray[0]);

    var diff =
      (+currentArray[0] - +ExpireArray[2]) * 365 +
      (+currentArray[1] - +ExpireArray[1]) * 30 +
      (+currentArray[2] - +ExpireArray[0]);

    console.log(diff);
    this.dayLeft = diff;
  }

  backToList() {
    this.router.navigate(['/Details']);
  }
}
