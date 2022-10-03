import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {
  constructor() {}

  SaveData() {
    console.log()
  }
  SaveName(nameForm?: any, emailForm?: any, zipCodeForm?: any) {
    console.log(nameForm, emailForm, zipCodeForm)
  }
}
