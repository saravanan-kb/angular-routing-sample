import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CricketHomeComponent } from './views/cricket-home/cricket-home.component';
import { IndiaComponent } from './views/cricket-home/india/india.component';
import { AustraliaComponent } from './views/cricket-home/australia/australia.component';
import { PlayerComponent } from './views/cricket-home/player/player.component';
import { CricketHomeService } from './views/cricket-home/cricket-home.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { Auth } from './Auth';
import { HttpClientModule } from '@angular/common/http';
import { Resolver } from './resolve';

@NgModule({
  declarations: [
    AppComponent,
    CricketHomeComponent,
    IndiaComponent,
    AustraliaComponent,
    PlayerComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CricketHomeService, Auth, Resolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
