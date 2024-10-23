import { Component } from '@angular/core';
import { ProfileRowComponent } from "../profile-row/profile-row.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [ProfileRowComponent, NgFor],
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.scss'
})
export class ProposalsComponent {
  names = ['Marius', 'Franziska', 'Josephine', 'Patrick'];
  images = ['img/hamster/5.jpg', 'img/hamster/6.jpg', 'img/hamster/7.jpg', 'img/hamster/8.jpg'];
  texts = ['2 Jahre alt', 'Gräbt gerne Löcher', 'Spielt gerne', 'Hamsterrad-Freak'];

}
