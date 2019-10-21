import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName : string = 'Thessia-Rebuild';
  shipName: string = 'Normandy SR-3'
  constructor() { }

  ngOnInit() {
  }

}
