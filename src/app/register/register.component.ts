import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      fullName: [null,Validators.required],
      date: [null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,
        Validators.minLength(8),Validators.pattern("")]]  //emailpattern p
    })
  }

}
