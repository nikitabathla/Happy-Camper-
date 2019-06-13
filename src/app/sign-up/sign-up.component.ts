import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });
  constructor() { }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.signupForm.reset();
  }
}


