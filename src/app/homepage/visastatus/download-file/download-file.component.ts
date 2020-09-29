import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileService } from 'src/app/services/file.service';
import { VisaStatusService } from 'src/app/services/visa-status.service';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.css']
})
export class DownloadFileComponent implements OnInit {
  fileInfos: Observable<string[]>;

  constructor(
    private fileService: FileService,
    private visaStatusService: VisaStatusService
  ) { }

  ngOnInit(): void {
    this.fileInfos = this.fileService.getFiles();
  }

}
