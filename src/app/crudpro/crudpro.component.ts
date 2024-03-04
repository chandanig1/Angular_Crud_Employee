import { Component } from '@angular/core';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Dialog, DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-crudpro',
  templateUrl: './crudpro.component.html',
  styleUrl: './crudpro.component.css'
})
export class CrudproComponent {
empform:FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: DialogRef<CrudproComponent>
    )
  {
    this.empform=this._fb.group({
      firstname:'',
      lastname:'',
      email:'',
      mobile:'',
      gender:'',
      password:'',
      conpass:'',

    });
  }
  onformsubmit()
  {
    if(this.empform.valid)
    {
    // console.log(this.empform.value);
      this._empService.addemployee(this.empform.value).subscribe({
        next: (val : any) => { 
          alert('employee added successfully'); 
          this._dialogRef.close();      
        },
        error:(err:any) => {
        console.error(err);
        },
      });
    }
  }
}
