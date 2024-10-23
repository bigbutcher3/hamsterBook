import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { FriendboxComponent } from "./friendbox/friendbox.component";
import { HamsterCardComponent } from "./hamster-card/hamster-card.component";
import { ProposalsComponent } from "./proposals/proposals.component";
import { ProfileRowComponent } from './profile-row/profile-row.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    
  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FriendboxComponent,
    HamsterCardComponent,
    ProposalsComponent,
    ProfileRowComponent,
    MatIconModule
],
  providers: [],
})
export class AppModule { }
