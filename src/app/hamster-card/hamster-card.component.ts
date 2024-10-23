import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hamster-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './hamster-card.component.html',
  styleUrl: './hamster-card.component.scss'
})
export class HamsterCardComponent implements OnInit{
  @Input() text: string = '';
  @Input() img: string = '';

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
