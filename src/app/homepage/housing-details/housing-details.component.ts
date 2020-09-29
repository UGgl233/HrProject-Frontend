import { Component, OnInit } from '@angular/core';
import { employee, houseDetails } from 'src/app/models/interfaces';
import axios from 'axios';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-housing-details',
  templateUrl: './housing-details.component.html',
  styleUrls: ['./housing-details.component.css']
})
export class HousingDetailsComponent implements OnInit {

  form: FormGroup;
  employees: employee[];
  userId: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  isLoaded:boolean = true;
  housiing: houseDetails;
  

  async ngOnInit(){

    this.userId = localStorage.getItem('userId');
    this.housiing = await this.getRequest();

    this.form = this.formBuilder.group({
      houseNumber: this.formBuilder.control(this.housiing.address),
      mates: this.formBuilder.control(this.housiing.numberOfPerson),
    });
    this.employees= this.housiing.employees,
    
    this.isLoaded = !this.isLoaded;
    console.log(this.employees[0].FirstName)

    this.form.disable();
  }

  getRequest = async():Promise<houseDetails>=>
    axios.get('http://localhost:8080/housing?userId='+parseInt(this.userId))
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
       alert(error);
      });

}
