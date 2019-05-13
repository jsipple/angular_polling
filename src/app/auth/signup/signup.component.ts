import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      'password': new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)]))
    })
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

}
