import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-worker-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './worker-demo.component.html',
  styleUrl: './worker-demo.component.css',
})
export class WorkerDemoComponent implements OnInit, OnDestroy {
  worker: Worker | undefined;
  status: string = 'Idle';
  result: string | null = null;

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      // Create a new
      this.worker = new Worker(
        new URL('../../workers/heavy-computation.worker', import.meta.url),
        { type: 'module' }
      );


      this.worker.onmessage = ({ data }) => {
        console.log('Main thread received a message:', data);
        this.status = 'Done!';
        this.result = `Result: ${data.result.toFixed(
          2
        )} (calculated in ${data.duration}ms)`;
      };
    } else {
      this.status = 'Web Workers are not supported in this browser.';
    }
  }

  ngOnDestroy(): void {
    this.worker?.terminate();
  }

  startCalculation(): void {
    this.status = 'Calculating...';
    this.result = null;
    this.worker?.postMessage({ iterations: 50_000_000 });
  }
}