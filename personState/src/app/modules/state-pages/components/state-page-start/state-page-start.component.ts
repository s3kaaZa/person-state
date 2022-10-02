import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-state-page-start',
  templateUrl: './state-page-start.component.html',
  styleUrls: ['./state-page-start.component.scss']
})
export class StatePageStartComponent implements OnInit {
  public nameGroup: FormGroup;
  public emailAndOptionsGroup: FormGroup;

  constructor(_formBuilder: FormBuilder) {
    this.nameGroup = _formBuilder.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      company: ['', [Validators.required]]
    });

    this.emailAndOptionsGroup = _formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
    });
  }
  ngOnInit(): void {
    console.log(111)
  }

}
