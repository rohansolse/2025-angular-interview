import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../interface/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  addUser(): void {
    // With OnPush, we must return a new array reference for change detection to run.
    const newUser: User = {
      id: this.users.length + 1,
      name: `User ${this.users.length + 1}`,
    };
    this.users = [...this.users, newUser];
  }

  trackByUser(index: number, user: User): number {
    console.log('Tracking user:', user.name, 'with id:', user.id);
    return user.id; // track by a unique identifier
  }
}