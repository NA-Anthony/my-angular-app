import { Component } from '@angular/core';
import { GreetingComponent } from './greeting/greeting';
import { CalculatorComponent } from './calculator/calculator';
import { ChatComponent } from './chat/chat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GreetingComponent, CalculatorComponent,ChatComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
