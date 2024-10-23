import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HamsterCardComponent } from "./hamster-card/hamster-card.component";
import { NgFor } from '@angular/common';
import { ProposalsComponent } from "./proposals/proposals.component";
import { FriendboxComponent } from "./friendbox/friendbox.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HamsterCardComponent, NgFor, ProposalsComponent, FriendboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HamsterBook';

  postTexts = [
    'Hallo, Mein Name ist Frederick. Ich bin hier, um neue Freunde kennen zu lernen!',
    'Hallo, zusammen. Freut mich, dass ihr hier seid!',
    'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt.',
    'Ich esse gerne Kekse.'
  ]

  postImages = [
    'img/hamster/1.jpg',
    'img/hamster/2.png',
    'img/hamster/3.jpg',
    'img/hamster/4.jpg',
    'img/hamster/5.jpg',
    'img/hamster/6.jpg',
    'img/hamster/7.jpg',
    'img/hamster/8.jpg',
    'img/hamster/9.jpg',
    'img/hamster/10.jpg'
  ]
  
}
