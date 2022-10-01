import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-state-page-start',
  templateUrl: './state-page-start.component.html',
  styleUrls: ['./state-page-start.component.scss']
})
export class StatePageStartComponent implements OnInit {
  name = new FormControl('Name');
  constructor() {
  }

  ngOnInit(): void {
    console.log(111)
  }

}
