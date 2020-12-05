import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CricketHomeService } from '../cricket-home.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent implements OnInit {
  public targetedPlayer: string;
  constructor(
    private location: Location,
    private activeRoute: ActivatedRoute,
    private cricketHomeService: CricketHomeService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      console.log(params['id']);
      this.targetedPlayer = this.cricketHomeService.getPlayerNameFromId(
        Number(params['id'])
      );
      console.log(this.targetedPlayer);
    });
  }

  goBackFromPlayer() {
    this.location.back();
  }
}
