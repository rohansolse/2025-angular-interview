import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, EMPTY, of } from 'rxjs';
import { catchError, switchMap, takeUntil } from 'rxjs/operators';
import { UserService, UserProfile } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule], // Needed for async pipe, ngIf, etc.
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  userProfile$!: Observable<UserProfile>;
  error: string | null = null;
  private readonly destroy$ = new Subject<void>();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userProfile$ = this.route.paramMap.pipe(
      takeUntil(this.destroy$), // ensure the stream is torn down when the component is destroyed
      switchMap(params => {
        const id = params.get('id');
        if (!id) {
          this.error = 'User ID is missing.';
          return EMPTY;
        }
        return this.userService.getUserProfile(id).pipe(
          catchError(err => {
            this.error = 'Failed to load user data.';
            console.error(err);
            return EMPTY;
          })
        );
      })
    );
  }

  ngOnDestroy(): void {
    
  console.log('🔥 Component Destroyed!');
    this.destroy$.next();
    this.destroy$.complete();
  }
}
