import { Employee } from './../models/employee';
import { Visa } from './../models/visa-status';
import { PersonalDocument } from './../models/personalDocument';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private httpClient: HttpClient) {}

  baseUrl = 'http://localhost:8080';
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest(
      'POST',
      `${this.baseUrl}/api/file/upload`,
      formData,
      {
        reportProgress: true,
        responseType: 'json',
      }
    );

    return this.httpClient.request(req);
  }

  getFiles(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/api/file/all');
  }

  getFile(name: string): Observable<any> {
    console.log(name);
    return this.httpClient.get(`${this.baseUrl}/api/file/${name}`);
  }

  getFileByCreateBy(name: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/file/${name}`);
  }

  getPersonalDocumentList(): Observable<Visa[]> {
    return this.httpClient.get<Visa[]>('http://localhost:8080/AllDocumentInfo');
  }

  getEmployeeDetail(name: string): Observable<Visa> {
    var visaDetail = this.httpClient.get<Visa>(
      `${this.baseUrl}/Detail/${name}`
    );
    console.log(name);
    console.log(visaDetail);
    return visaDetail;
  }

  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');

    return of(confirmation);
  }
}
