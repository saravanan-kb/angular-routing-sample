import { Component, OnInit } from '@angular/core';
import { CricketHomeService } from '../cricket-home.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css'],
})
export class IndiaComponent implements OnInit {
  public indianPlayers: any;
  constructor(private cricketHomeService: CricketHomeService) {}

  ngOnInit(): void {
    this.indianPlayers = [
      { name: 'kholi', id: 1 },
      { name: 'rohit', id: 2 },
    ];
  }
}
