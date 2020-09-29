import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.css']
})
export class HireComponent implements OnInit {

  hireForm: FormGroup;
  tokenGenerateFlag: boolean = false;
  email: string = 'uggl233@gmail.com';
  findApplicationStatus: boolean;
  fullname: string;

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.hireForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });

  }

  createRegistrationToken() {
    let param = new HttpParams();
    param = param.append('email', this.hireForm.get("email").value);
    this.email = this.hireForm.get("email").value;
    let obs1 = this.http.get('http://localhost:8080/registration/generateRegistrationToken', {params: param});
    obs1.subscribe((response) => {
      if (response == true) {
        this.tokenGenerateFlag = true;
      }
    });
  }

  refreshData() {
    let param = new HttpParams();
    param = param.append('email', this.email);
    let obs1 = this.http.get('http://localhost:8080/fetchApplicationWorkFlow', {params: param});
    obs1.subscribe((response: any) => {
      console.log(response);
      if (response.res) {
        this.findApplicationStatus = true;
        this.fullname = response.res;
      }
    });
  }

  approve() {
    let param = new HttpParams();
    param = param.append('email', this.email);
    let obs1 = this.http.get('http://localhost:8080/approveApplication', {params: param});
    obs1.subscribe((response: any) => {
    
    });
  }

  reject() {
    let param = new HttpParams();
    param = param.append('email', this.email);
    let obs1 = this.http.get('http://localhost:8080/rejectApplication', {params: param});
    obs1.subscribe((response: any) => {
    });
  }
}
