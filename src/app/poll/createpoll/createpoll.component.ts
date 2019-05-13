import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-createpoll',
  templateUrl: './createpoll.component.html',
  styleUrls: ['./createpoll.component.css']
})
export class CreatepollComponent implements OnInit {
  createPollForm: FormGroup;
  options: FormArray

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createPollForm = this.formBuilder.group({
      question: '',
      options: this.formBuilder.array([this.createOptions() ])
    })
  }

  onSubmit() {
    console.log(this.createPollForm.value);
  }

  createOptions() {
    return this.formBuilder.group({
      option: ''
    })
  }

  addOptions(): void {
    this.options = this.createPollForm.get('options') as FormArray;
    this.options.push(this.createOptions());
  }

  getControls() {
    return (<FormArray>this.createPollForm.get('options')).controls;
  }

}