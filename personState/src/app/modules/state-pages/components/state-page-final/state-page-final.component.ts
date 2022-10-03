import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-state-page-final',
  templateUrl: './state-page-final.component.html',
  styleUrls: ['./state-page-final.component.scss']
})
export class StatePageFinalComponent implements OnInit {
  public zipCodeForm: FormGroup;

  constructor(_formBuilder: FormBuilder) {
    this.zipCodeForm = _formBuilder.group({
      zipCode: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

}
