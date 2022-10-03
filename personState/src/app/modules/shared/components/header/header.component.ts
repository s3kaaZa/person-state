import { Component, OnInit } from '@angular/core';
import { SaveDataService } from "../../services/save-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private saveDataService: SaveDataService) { }

  ngOnInit(): void {
  }

  saveForm() {
    this.saveDataService.SaveData()
  }

}
