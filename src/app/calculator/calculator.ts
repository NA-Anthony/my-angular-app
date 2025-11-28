import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, DashboardComponent],
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css']
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  result: number | null = null;
  history: { num1: number, num2: number, sum: number }[] = [];

  calculateSum() {
    this.result = this.num1 + this.num2;
    this.history.push({ num1: this.num1, num2: this.num2, sum: this.result });
  }
}
