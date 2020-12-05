import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cricket-home',
  templateUrl: './cricket-home.component.html',
  styleUrls: ['./cricket-home.component.css'],
})
export class CricketHomeComponent implements OnInit {
  public cricketHomeList: Array<string>;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cricketHomeList = ['india', 'australia'];
  }

  routeNavigate(parameter: string): void {
    this.router.navigate([parameter], { relativeTo: this.route });
  }
}
