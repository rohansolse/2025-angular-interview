import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { User } from '../../interface/user';
@Component({
  selector: 'app-virtual-scroll-list',
  standalone: true,
  imports: [CommonModule, ScrollingModule], // Import ScrollingModule here
  templateUrl: './virtual-scroll-list.component.html',
  styleUrl: './virtual-scroll-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollListComponent {
  users: User[] = [];

  constructor() {
    // Generate a large list of users for the demo
    this.users = Array.from({ length: 5000 }, (_, i) => ({
      id: i + 1,
      name: `User #${i + 1}`,
    }));
  }

  trackById(index: number, user: User): number {
    return user.id;
  }
}