import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-preonboard',
  templateUrl: './preonboard.component.html',
  styleUrls: ['./preonboard.component.css']
})
export class PreonboardComponent implements OnInit {

  tokenGenerateFlag: boolean = false;

  preOnboardForm: FormGroup;

  isNotValidTokenAndPassword: boolean = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.preOnboardForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      registrationToken: new FormControl(null, Validators.required)
    });
  }


  generateToken() {
    // Make a backend API call to notify hr the user by email.

    // let param = new HttpParams();
    // param = param.append('username', this.preOnboardForm.get("username").value);
    // param = param.append('email', this.preOnboardForm.get("email").value);
    const body = {
      'username': this.preOnboardForm.get("username").value,
      'email': this.preOnboardForm.get("email").value
    }
    let obs1 = this.http.post<any>('http://localhost:8080/registration/notifyHRtoGenerateToken', body);
    obs1.subscribe((response) => {
      if (response == true) {
        this.tokenGenerateFlag = true;
      }
    });
  }

  nextStep() {
    const redirectUrl = 'onboard/onboarding';
    // this.router.navigate([redirectUrl, { queryParams: {email: this.preOnboardForm.get("email").value}}]);
    let param = new HttpParams();
    param = param.append('email', this.preOnboardForm.get("email").value);
    param = param.append('username', this.preOnboardForm.get("username").value);
    param = param.append('password', this.preOnboardForm.get("password").value);
    param = param.append('registrationToken', this.preOnboardForm.get("registrationToken").value);

    let obs1 = this.http.get<any>('http://localhost:8080/registration/authenticate', {params: param});
    obs1.subscribe((response) => {
      if (response == true) {
        console.log("Success");
      } else {
        this.isNotValidTokenAndPassword = true;
      }
    });
  }
}
