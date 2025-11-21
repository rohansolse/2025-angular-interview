import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  message = 'Hello from Child component';
  count = 0;

  increment() {
    this.count += 1;
  }

  setMessage(newMessage: string) {
    this.message = newMessage;
  }

  getStatus() {
    return `${this.message} (count: ${this.count})`;
  }
}
