import { Component, OnInit } from '@angular/core';
import { WorklistselectorComponent } from './worklistselector/worklistselector.component';
import { MatFormField, MatLabel, MatSelect, MatOption } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let selector:  WorklistselectorComponent;
  }

}
