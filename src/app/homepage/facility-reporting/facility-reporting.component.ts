import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';
import { facilityReportsList } from 'src/app/models/interfaces';

@Component({
  selector: 'app-facility-reporting',
  templateUrl: './facility-reporting.component.html',
  styleUrls: ['./facility-reporting.component.css']
})
export class FacilityReportingComponent implements OnInit {

  form: FormGroup;
  //formList: FormArray;
  facilityReports: facilityReportsList;
  isLoaded:boolean = true;
  userId :string;

  myDate = new Date();
  constructor(private fb: FormBuilder) {
  }

  async ngOnInit(){

    this.facilityReports = await this.getFacilityReport();

    this.form= new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    });

    this.isLoaded = !this.isLoaded;
    this.userId = localStorage.getItem('userId');
  }

  
  getFacilityReport = async (): Promise<facilityReportsList> =>
   await axios.get('http://localhost:8080/facility-report?userId='+parseInt(localStorage.getItem('userId')))
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        alert(error);
      });   


  async onSubmit(){
    let result = await this.sendFacilityReport(this.form.get('title').value, this.form.get('description').value);
    this.form.reset()
  }


  sendFacilityReport= async (title, desc): Promise<boolean> =>{
  let result = false;
  let url = 'http://localhost:8080/facility-report?title='+title+'&desc='+desc+'&userId='+parseInt(localStorage.getItem('userId'))+'&date='
  +this.myDate.getFullYear()+"-"+(this.myDate.getMonth()+1)+"-"+(this.myDate.getDate());
  axios.post(url, {})
  .then(function (response) {
    result = (response.data);
  })
  return result;
  }

}
