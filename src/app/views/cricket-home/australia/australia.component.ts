import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-australia',
  templateUrl: './australia.component.html',
  styleUrls: ['./australia.component.css'],
})
export class AustraliaComponent implements OnInit {
  public australianPlayers: any;
  constructor() {}

  ngOnInit(): void {
    this.australianPlayers = [
      { name: 'smith', id: 3 },
      { name: 'warner', id: 4 },
    ];
  }
}
