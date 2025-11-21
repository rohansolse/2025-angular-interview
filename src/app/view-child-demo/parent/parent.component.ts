import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent, { static: false }) child!: ChildComponent;
  inputMessage = '';
  notificationMessage: string | null = null;

  ngAfterViewInit() {
    // child reference available here
    console.log('ViewChild ready:', this.child?.getStatus());
  }

  callChildIncrement() {
    this.child?.increment();
  }

  setChildMessage() {
    this.child?.setMessage(this.inputMessage || 'Default message from parent');
  }

  showChildStatus() {
    this.notificationMessage = this.child?.getStatus() ?? 'Child not available';
    setTimeout(() => {
      this.notificationMessage = null;
    }, 5000);
  }
}
