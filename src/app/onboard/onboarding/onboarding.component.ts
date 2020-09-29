import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  // Change to activedRouter later
  emailValue: string = "adw";

  form: FormGroup;
  type;
  license;
  selectedFile: any;
  
  constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.emailValue = this.activatedRoute.snapshot.params['email'];
    this.form = new FormGroup({
      f_name: new FormControl('',Validators.required),
      l_name: new FormControl('',Validators.required),
      m_name: new FormControl(''),
      p_name: new FormControl(''),
      avatar: new FormControl(''),
      currentAddress: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      email: new FormControl(this.emailValue),
      carMake: new FormControl(''),
      carModel: new FormControl(''),
      carColor: new FormControl(''),
      ssn: new FormControl('',Validators.compose([this.ssnValidator, Validators.required])),
      dob: new FormControl('',Validators.compose([this.dobValidator, Validators.required])),
      gender: new FormControl('',Validators.required),
      visa_status: new FormControl(''),
      citizenship: new FormControl('',Validators.required),
      driverLicense: new FormControl('',Validators.required),
      imageLicense: new FormControl(''),
      licenseExp: new FormControl(''),
      licenseNumber: new FormControl(''),
      referenceForm: new FormGroup({
        referenceFirstName: new FormControl(''),
        referenceMiddleName: new FormControl(''),
        referenceLastName: new FormControl(''),
        referencePhone: new FormControl(''),
        referenceEmail: new FormControl(''),
        referenceRelation: new FormControl('')
      }),
      emergency: new FormGroup({
        e_firstName: new FormControl(''),
        e_lastName: new FormControl(''),
        e_phoneNum: new FormControl(''),
        e_Email: new FormControl(''),
        e_Relationship: new FormControl('')
      }),
    });
    this.form.controls['email'].disable();
  
    // console.log(this.emailValue);
  }

  public uploadFile(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: this.selectedFile
    });
    this.form.get('avatar').updateValueAndValidity()
  }
  
  onSubmit  = async (mediaItem) => {
    //console.log();
    console.log(mediaItem);
    let result = await this.sendOnboarding(this.form.value);
    console.log(result);
    this.router.navigate(['/digitaldocument'])
  }


  sendOnboarding= async (mediaItem): Promise<boolean> =>{
  let result = false;
  let rest = '&pName='+mediaItem.p_name+'&curAdd='+mediaItem.currentAddress+'&phone='+mediaItem.phone+'&email='+mediaItem.email+
  '&ssn='+mediaItem.ssn+'&dob='+mediaItem.dob+'&gender='+mediaItem.gender+'&visa='+mediaItem.visa_status+'&ctz='+mediaItem.citizenship+'&dl='+mediaItem.driverLicense+'&dlExp='+
  mediaItem.licenseExp+'&dlNum='+mediaItem.licenseNumber+'&refFName='+mediaItem.referenceForm.referenceFirstName+'&refMName='+mediaItem.referenceForm.referenceMiddleName+
  '&refLName='+mediaItem.referenceForm.referenceLastName+'&refPhone='+mediaItem.referenceForm.referencePhone+'&refEmail='+mediaItem.referenceForm.referenceEmail+'&refRel='+mediaItem.referenceForm.referenceRelation+'&emFName='+
  mediaItem.emergency.e_firstName+'&emLName='+mediaItem.emergency.e_lastName+'&emPhone='+mediaItem.emergency.e_phoneNum+'&emEmail='+mediaItem.emergency.e_Email+'&emRel='+
  mediaItem.emergency.e_Relationship+'&carMake='+mediaItem.carMake+'&carModel='+mediaItem.carModel+'&carColor='+mediaItem.carColor;
  
  let url = 'http://localhost:8080/onboarding?fName='+mediaItem.f_name+'&mName='+mediaItem.m_name+'&lName='+mediaItem.l_name+rest;
  axios.post(url, {})
  .then(function (response) {
    result = (response.data);
  })
  return result;
  }

  get f_name(){
    return this.form.get('f_name');
  }

  get l_name(){
    return this.form.get('l_name');
  }
  get currentAddress(){
    return this.form.get('currentAddress');
  }
  get ssn(){
    return this.form.get('ssn');
  }
  get dob(){
    return this.form.get('dob');
  }
  get gender(){
    return this.form.get('gender');
  }
  get citizenship(){
    return this.form.get('citizenship');
  }
  get driverLicense(){
    return this.form.get('driverLicense');
  }

  dobValidator(control: FormControl) {
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2020;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        year: true
      };
    }
  }
  
  ssnValidator(control: FormControl){
    if(control.value.trim().length === 9){
      return null;
    }
    else{
      return {num:true};
    }
  }

}
