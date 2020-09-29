import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  @Input() emailValue;

  form: FormGroup;
  type;
  license;
  selectedFile: any;
  httpClient: any;

  constructor(private fb: FormBuilder, private router: Router,  private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
  
      f_name: new FormControl('',Validators.required),
      l_name: new FormControl('',Validators.required),
      m_name: new FormControl(''),
      p_name: new FormControl(''),
      avatar: new FormControl(null),
      currentAddress: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      email: new FormControl(this.emailValue),
      carMake: new FormControl(''),
      carModel: new FormControl(''),
      carColor: new FormControl(''),
      ssn: new FormControl('',Validators.required),
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
      emergency: this.fb.array([ this.createItem()]),
    });
    this.form.controls['email'].disable()
  }

  createItem(){
    return this.fb.group({
      e_firstName: '',
      e_lastName: '',
      e_phoneNum: '',
      e_Email: '',
      e_Relationship: '',
    });
  }

  get emergency() {
    return this.form.get('emergency') as FormArray;
  }

  addEmergency(): void {
    this.emergency.push(this.createItem());
  }


  // @TODO: 
  public uploadFile(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar: this.selectedFile
    });
    this.form.get('avatar').updateValueAndValidity()
  }
  
  onSubmit(mediaItem) {
    console.log(this.form.value);
    console.log(mediaItem);

    //Uncomment the following code to post data
    /* //const uploadImageData = new FormData();
    // //uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  
    // //Make a call to the Spring Boot Application to save the form
    // this.httpClient.post('http://localhost:8080/image/upload', mediaItem, { observe: 'response' })
    //   .subscribe((response) => {}
    //   );*/

    this.router.navigate(['onboard/onboardingdocuments']);
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

}
