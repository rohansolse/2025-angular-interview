import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent, { static: false }) child!: ChildComponent;
  inputMessage = '';

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
    alert(this.child?.getStatus() ?? 'Child not available');
  }
}
