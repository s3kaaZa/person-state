import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SaveDataService} from "../../../shared/services/save-data.service";

@Component({
  selector: 'app-state-page-start',
  templateUrl: './state-page-start.component.html',
  styleUrls: ['./state-page-start.component.scss']
})
export class StatePageStartComponent implements OnInit {
  public NameForm: FormGroup;
  public EmailAndOptionsForm: FormGroup;

  constructor(
    private sds: SaveDataService,
    private formBuilder: FormBuilder
  ) {
    this.NameForm = formBuilder.group({
      Name: ['', [Validators.required]],
      Surname: ['', [Validators.required]],
      Country: ['', [Validators.required]]
    });

    this.EmailAndOptionsForm = formBuilder.group({
      RadioGroup: ['', Validators.required],
      Email: ['', [
        Validators.required,
        Validators.email
      ]],
    });
  }
  ngOnInit(): void {
    console.log(111)
    console.log(this)
  }

  SaveName() {
    this.sds.SaveName(this.NameForm.value, this.EmailAndOptionsForm.value)
  }

}
