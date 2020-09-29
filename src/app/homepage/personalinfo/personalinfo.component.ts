import { Observable } from 'rxjs';
import { FileService } from 'src/app/services/file.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, NgControl } from '@angular/forms';

import { FormBuilder, ValidatorFn, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.css'],
})
export class PersonalinfoComponent implements OnInit {
  userId: number;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private fileService: FileService,
    private router: Router
  ) {}

  profileForm: FormGroup;

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: [null, Validators.required],
      preferredName: [null, this.forbiddenNameValidator(/abc/i)],
      avatar: [null],
      dob: [null],
      age: [null],
      gender: [null],
      ssn: [null],

      primaryAddressLine1: [null],
      primaryAddressLine2: [null],
      primaryAddressCity: [null],
      primaryAddressState: [null],
      primaryAddressZip: [null],

      secondAddressLine1: [null],
      secondAddressLine2: [null],
      secondAddressCity: [null],
      secondAddressState: [null],
      secondAddressZip: [null],

      personalEmail: [null],
      workEmail: [null],
      cell: [null],
      workPhone: [null],

      workAuth: [null],
      authStart: [null],
      authEnd: [null],
      empStart: [null],
      empEnd: [null],
      title: [null],

      emergencyFullName: [null],
      emergencyPhone: [null],
      emergencyAddress: [null],

      aliases: this.fb.array([this.fb.control('')]),
    });
    this.profileForm.disable();

    let param = new HttpParams();
    param = param.append('userId', '1');
    let ob = this.http.get(
      'http://localhost:8080/personalInfo/fetchPersonalInfo',
      { params: param }
    );
    ob.subscribe((response: any) => {
      console.log(response);
      this.profileForm.patchValue({ name: response.name });
      this.profileForm.patchValue({ preferredName: response.name });
      this.profileForm.patchValue({ dob: response.dob });
      this.profileForm.patchValue({ gender: response.gender });
      this.profileForm.patchValue({ ssn: response.ssn });
      this.profileForm.patchValue({ age: response.age });

      this.profileForm.patchValue({
        primaryAddressLine1: response.primaryAddressLine1,
      });
      this.profileForm.patchValue({
        primaryAddressLine2: response.primaryAddressLine2,
      });
      this.profileForm.patchValue({
        primaryAddressCity: response.primaryAddressCity,
      });
      this.profileForm.patchValue({
        primaryAddressState: response.primaryAddressState,
      });
      this.profileForm.patchValue({
        primaryAddressZip: response.primaryAddressZip,
      });

      this.profileForm.patchValue({
        secondAddressLine1: response.secondAddressLine1,
      });
      this.profileForm.patchValue({
        secondAddressLine2: response.secondAddressLine2,
      });
      this.profileForm.patchValue({
        secondAddressCity: response.secondAddressCity,
      });
      this.profileForm.patchValue({
        secondAddressState: response.secondAddressState,
      });
      this.profileForm.patchValue({
        secondAddressZip: response.secondAddressZip,
      });

      this.profileForm.patchValue({ personalEmail: response.personalEmail });
      this.profileForm.patchValue({ workEmail: response.personalEmail });
      this.profileForm.patchValue({ cell: response.cell });
      this.profileForm.patchValue({ workPhone: response.workPhone });

      this.profileForm.patchValue({ workAuth: response.workAuth });
      this.profileForm.patchValue({ title: response.title });
      this.profileForm.patchValue({ authStart: response.authStart });
      this.profileForm.patchValue({ authEnd: response.authEnd });
      this.profileForm.patchValue({ empStart: response.empStart });
      this.profileForm.patchValue({ empEnd: response.empEnd });

      this.profileForm.patchValue({
        emergencyFullName: response.emergencyFullName,
      });
      this.profileForm.patchValue({ emergencyPhone: response.emergencyPhone });
      this.profileForm.patchValue({
        emergencyAddress: response.emergencyAddress,
      });
    });
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  enableEdit() {
    this.profileForm.enable();
  }

  printName() {
    console.log(this.profileForm.get('name').value);
  }

  cancel() {}

  sendToAPI() {
    console.log(this.profileForm.value);
    const data = {
      userId: 1,

      name: this.profileForm.get('name').value,
      preferredName: this.profileForm.get('preferredName').value,
      dob: this.profileForm.get('dob').value,
      age: this.profileForm.get('age').value,
      gender: this.profileForm.get('gender').value,
      ssn: this.profileForm.get('ssn').value,

      primaryAddressLine1: this.profileForm.get('primaryAddressLine1').value,
      primaryAddressLine2: this.profileForm.get('primaryAddressLine2').value,
      primaryAddressCity: this.profileForm.get('primaryAddressCity').value,
      primaryAddressState: this.profileForm.get('primaryAddressState').value,
      primaryAddressZip: this.profileForm.get('primaryAddressZip').value,

      secondAddressLine1: this.profileForm.get('secondAddressLine1').value,
      secondAddressLine2: this.profileForm.get('secondAddressLine2').value,
      secondAddressCity: this.profileForm.get('secondAddressCity').value,
      secondAddressState: this.profileForm.get('secondAddressState').value,
      secondAddressZip: this.profileForm.get('secondAddressZip').value,

      personalEmail: this.profileForm.get('personalEmail').value,
      workEmail: this.profileForm.get('workEmail').value,
      cell: this.profileForm.get('cell').value,
      workPhone: this.profileForm.get('workPhone').value,

      workAuth: this.profileForm.get('workAuth').value,
      authStart: this.profileForm.get('authStart').value,
      authEnd: this.profileForm.get('authEnd').value,
      empStart: this.profileForm.get('empStart').value,
      empEnd: this.profileForm.get('empEnd').value,
      title: this.profileForm.get('title').value,

      emergencyFullName: this.profileForm.get('emergencyFullName').value,
      emergencyPhone: this.profileForm.get('emergencyPhone').value,
      emergencyAddress: this.profileForm.get('emergencyAddress').value,
    };
    let ob = this.http.post<any>(
      'http://localhost:8080/personalInfo/savePersonalInfo',
      data
    );
    ob.subscribe((response) => {
      console.log('saved!');
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
  }

  canDeactivate(): Observable<boolean> | boolean {
    return this.fileService.confirm('Discard changes?');
  }

  onCancel() {
    this.backToHomePage();
  }

  backToHomePage() {
    this.router.navigate(['/homepage']);
  }
}
