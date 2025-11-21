import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
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