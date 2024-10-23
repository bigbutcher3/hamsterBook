import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [NgIf],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent {
  @Input() name = 'Frederick';
  @Input() image = 'img/hamster/1.jpg';
  @Input() description = '3 Jahre alt';
  @Input() canFollow = true;

  constructor(public fs:FriendService) {}

}
