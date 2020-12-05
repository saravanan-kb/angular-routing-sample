import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css'],
})
export class LazyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goBackToCricketHome() {
    this.router.navigate(['cricket-home']);
  }
}
