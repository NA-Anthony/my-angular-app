import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greeting.html',
  styleUrls: ['./greeting.css']
})
export class GreetingComponent {
  name: string = 'Anthony'; // Tu peux personnaliser
}
