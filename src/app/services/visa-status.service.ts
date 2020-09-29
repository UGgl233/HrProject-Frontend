import { PersonalDocument } from './../models/personalDocument';
import { Visa } from './../models/visa-status';
import { OPT } from './../models/opt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisaStatusService {
  sharedData: string = 'hihihihihi';

  optStatus = [
    { id: 0, text: 'please select your visa status' },
    { id: 1, text: 'OPT Receipt (Applied, but don’t receive the OPT EAD yet)' },
    { id: 2, text: 'OPT EAD (Received the OPT EAD)' },

    {
      id: 3,
      text:
        'OPT STEM Receipt (Applied for OPT STEM, but don’t receive the OPT STEM EAD)',
    },
    { id: 4, text: 'OPT STEM EAD (Received the OPT EAD)' },
  ];

  constructor(private httpClient: HttpClient) {}

  getAllVisaStatus(): Promise<OPT[]> {
    return Promise.resolve(this.optStatus);
  }

  public addPersonalVisaStatus(visa: Visa): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.post<any>(
      'http://localhost:8080/visa/',

      JSON.stringify(visa),
      { headers: headers }
    );
  }

  public savePersonalDocument(
    document: PersonalDocument
  ): Observable<PersonalDocument> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.httpClient.post<PersonalDocument>(
      'http://localhost:8080/personalDocument',
      JSON.stringify(document),
      { headers: headers }
    );
  }
}
