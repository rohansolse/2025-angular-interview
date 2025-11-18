import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { User } from '../../interface/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-virtual-scroll-list',
  standalone: true,
  imports: [CommonModule, ScrollingModule], // Import ScrollingModule here
  templateUrl: './virtual-scroll-list.component.html',
  styleUrl: './virtual-scroll-list.component.css',
  providers: [UserService], // Provide the service directly in the component
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VirtualScrollListComponent {
  users: User[] = [];

  constructor(private userService: UserService) {
    // Use the service to get the user data
    this.users = this.userService.getUsers(5000);
  }

  trackById(index: number, user: User): number {
    return user.id;
  }
}