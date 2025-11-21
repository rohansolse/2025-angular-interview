import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, Subscription, Observable, timer } from 'rxjs';
import { map, switchMap, tap, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-map-demo.component.html',
  styleUrls: ['./switch-map-demo.component.css'],
})
export class SwitchMapDemoComponent implements OnDestroy {
  private beforeSubs = new Subscription();
  private afterTerm$ = new Subject<string>();

  beforeResults: string[] = [];
  afterResult$: Observable<string> = this.afterTerm$.pipe(
    tap((term) => (this.afterResultsInfo = `Latest click: ${term}`)),
    switchMap((term) => this.mockRequest(term)),
    tap((response) => (this.afterResultsInfo = `Completed: ${response}`)),
    shareReplay(1)
  );

  afterResultsInfo = 'Idle';

  readonly beforeSnippet = `route.paramMap.subscribe(params => {
  const id = params.get('id');
  if (!id) { return; }

  // Inner subscription: harder to manage/cancel
  userService.getUserProfile(id).subscribe({
    next: profile => this.profile = profile,
    error: err => this.error = err
  });
});
`;

  readonly afterSnippet = `userProfile$ = route.paramMap.pipe(
  switchMap(params => {
    const id = params.get('id');
    if (!id) { return EMPTY; }
    return userService.getUserProfile(id);
  }),
  shareReplay(1) // optional: cache last value
); // async pipe handles subscribe/unsubscribe
`;

  beforeFetch(term: string): void {
    const sub = this.mockRequest(term).subscribe((result) => {
      this.beforeResults = [
        `${new Date().toLocaleTimeString()}: ${result}`,
        ...this.beforeResults,
      ].slice(0, 6);
    });
    this.beforeSubs.add(sub);
  }

  afterSearch(term: string): void {
    this.afterTerm$.next(term);
  }

  private mockRequest(term: string): Observable<string> {
    const delayMs = 700 + Math.floor(Math.random() * 1000);
    return timer(delayMs).pipe(
      map(() => `${term} resolved after ${delayMs}ms`)
    );
  }

  ngOnDestroy(): void {
    this.beforeSubs.unsubscribe();
    this.afterTerm$.complete();
  }
}
