import { Component, OnInit } from '@angular/core';
import { CricketHomeService } from '../cricket-home.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css'],
})
export class IndiaComponent implements OnInit {
  public indianPlayers: any;
  constructor(
    private cricketHomeService: CricketHomeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.data['resolvedData']);
    this.route.data.subscribe((data) => {
      console.log(data);
    });
    this.indianPlayers = [
      { name: 'kholi', id: 1 },
      { name: 'rohit', id: 2 },
    ];
  }
}
