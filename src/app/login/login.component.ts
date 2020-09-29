import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: string;
  password : string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private route: ActivatedRoute, private router: Router, 
    private http: HttpClient, private appService: AppService
    ) {}


  ngOnInit(): void {
  }

  redirectToOnboard() {
    const redirectUrl = 'onboard/preonboard';
    this.router.navigate([redirectUrl]);
  }

  handleLogin() {
    // this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
    //   this.invalidLogin = false;
    //   this.loginSuccess = true;
    //   this.successMessage = 'Login Successful.';
    //   this.router.navigate(['/hello-world']);
    // }, () => {
    //   this.invalidLogin = true;
    //   this.loginSuccess = false;
    // });
    let param = new HttpParams();
    param = param.append('username', this.username);
    param = param.append('password', this.password);
    let obs1 = this.http.get('http://localhost:8080/user/authenticateuser', {params: param});
    obs1.subscribe((response : any) => {
      console.log(response);
      if (response.status == true) {
        this.appService.login(response.userId, response.username);
        const redirectUrl = '/homepage/personalinfo';
        this.router.navigate([redirectUrl]);
        if (response.role == "hr") {
          this.appService.setHr();
          console.log("is hr");
        }
      } else {
        this.invalidLogin = true;
      }
    });
    // Backend api call should put in a global service file?
  }

}
