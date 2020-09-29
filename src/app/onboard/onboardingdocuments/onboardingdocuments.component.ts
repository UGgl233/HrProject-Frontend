import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-onboardingdocuments',
  templateUrl: './onboardingdocuments.component.html',
  styleUrls: ['./onboardingdocuments.component.css']
})
export class OnboardingdocumentsComponent implements OnInit {

  form: FormGroup;
  userId: string;
  date: String;
  myDate = new Date();
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userId = (localStorage.getItem("userId"));
    this.form = new FormGroup({
      document1: new FormControl(''),
      document2: new FormControl(''),
      document3: new FormControl('')
    });
  }

  async onSubmit(mediaItem) {
    console.log(mediaItem);
    this.date = this.myDate.getFullYear()+"-"+(this.myDate.getMonth()+1)+"-"+(this.myDate.getDate());
    let result = await this.getRequest();
    if(result !== false){
      this.router.navigate(['onboard/postonboard']);
    }
    else{
      alert("Error Submitting Form!");
    }
  }

    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage(document) {
      //Make a call to Sprinf Boot to get the Image Bytes.
      console.log("Getting Doc")
     
    }

    getRequest = async():Promise<boolean>=>
    axios.get('http://localhost:8080/application?userId='+parseInt(this.userId)+'&date='+this.date)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
       return (error);
      });
}
