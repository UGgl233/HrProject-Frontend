import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app-service.service';
import { OPT } from 'src/app/models/opt';
import { PersonalDocument } from 'src/app/models/personalDocument';
import { FileService } from 'src/app/services/file.service';
import { VisaStatusService } from 'src/app/services/visa-status.service';


@Component({
  selector: 'app-visastatus',
  templateUrl: './visastatus.component.html',
  styleUrls: ['./visastatus.component.css'],
  providers: [DatePipe]
})
export class VisastatusComponent implements OnInit {
  visaStatus = [];
  SelectVisaStatus: OPT;
  selectedFiles: FileList;
  currentFile: File;
  currentFileName: string;
  message = '';
  result: boolean;
  selectedOption: number = 0;
  dateOfBirth: string;
  visa: any;
  document: PersonalDocument;
  date = new Date();

  fileInfos: Observable<any>;
  
  get data() {
    return this.visaStatusService.sharedData;
  }

  set data(value: string) {
    this.visaStatusService.sharedData = value;
  }

  constructor(
    private visaStatusService: VisaStatusService,
    private fileService: FileService,
    private datePipe: DatePipe,
    private router: Router,
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.getAllVisaStatus();
    this.fileInfos = this.fileService.getFiles();
  }

  getAllVisaStatus() {
    this.visaStatusService
      .getAllVisaStatus()
      .then((visaStatus) => (this.visaStatus = visaStatus));
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
    this.document = event.target.file;

    console.log(this.selectedFiles);
    console.log(this.document);
    // console.log(this.currentFileName);
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    this.currentFile = this.selectedFiles.item(0);
    this.currentFileName = this.selectedFiles.item(0).name;
    this.fileService.upload(this.currentFile).subscribe(
      (response) => {
        if (response instanceof HttpResponse) {
          this.message = response.body.message;
          alert(this.message);
          this.fileInfos = this.fileService.getFiles();
        }
      },
      (err: Response) => {
        var current = new Date();
        current = this.date;
        this.message = 'Please Waiting for HR to approve and Sign I-983';
        alert('Upload Successfully' + ' ' + current);
      }
    );
    console.log(this.currentFileName);
  }

  updateDOB(dateObject) {
    // console.log('DATE in dd/mm/yyyy', dateObject.toLocaleDateString());
    //console.log(dateObject.toLocaleDateString());
    // var exptime = dateObject.toLocaleDateString();
    var exptime = dateObject;
    var curtime = new Date();

    // var curtime = new Date().toLocaleDateString();

    // var exptimeArray: string[] = exptime.split('/');
    // var curtimeArray: string[] = curtime.split('/');

    // var expmonth = exptimeArray[0];
    // var expdate = exptimeArray[1];
    // var expyear = exptimeArray[2];

    // var curmonth = curtimeArray[0];
    // var curdate = curtimeArray[1];
    // var curyear = curtimeArray[2];
    // var testresult = 100;
    // this.result = testresult;
    // return this.result;

    var testresult = false;
    this.result = testresult;

    if (exptime.getTime() < curtime.getTime()) {
      alert('Your OPT is Invaild');
      console.log(this.result);
      return this.result;
    } else {
      this.result = !this.result;
      console.log(this.result);
      return this.result;
    }
  }

  public currentDate = new Date();

  getCurrentDateInApiFormat() {
    const date = this.currentDate;
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    return [date.getFullYear(), month, day].join('-');
  }

  onChooseVisaStatus(visa: any) {
    var text = this.visaStatus[this.selectedOption].text;

    visa = { date: this.getCurrentDateInApiFormat() };
    this.visa = visa;
    visa.visaType = text;
    visa.isActive = true;
    visa.createUser = this.appService.getUserName();

    var date = this.getCurrentDateInApiFormat();
    visa.modificationDate = date.toString();
    console.log(visa.modificationDate);

    return this.visaStatusService
      .addPersonalVisaStatus(this.visa)
      .subscribe((newPost) => (visa = newPost));
  }

  onSaveDocument() {
    var document = new PersonalDocument();
    document.path = this.selectedFiles.item(0).name;
    document.createBy = this.appService.getUserName();

    var date = this.getCurrentDateInApiFormat();
    document.createDate = date;

    return this.visaStatusService
      .savePersonalDocument(document)
      .subscribe((newPost) => (document = newPost));
  }

  routeToDownloadFile() {
    const redirectUrl = 'homepage/visastatus/download-file';
    this.router.navigate([redirectUrl]);
  }
}
