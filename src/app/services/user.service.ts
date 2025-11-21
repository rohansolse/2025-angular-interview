import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { User as BasicUser } from '../interface/user';

export interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  orders: { id: number; amount: number }[];
}

export interface UserProfile extends User {
  orderTotal: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getUsers(count: number): BasicUser[] {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `User #${i + 1}`,
    }));
  }

  getUserProfile(id: string): Observable<UserProfile> {
    // Local mock to avoid real HTTP until a backend exists
    const mockUser: User = {
      id: Number(id),
      name: `User #${id}`,
      email: `user${id}@example.com`,
      address: {
        street: '123 Mockingbird Lane',
        city: 'Sampleville',
      },
      orders: [
        { id: 1, amount: 120 },
        { id: 2, amount: 75 },
      ],
    };

    return of(mockUser).pipe(
      map((user) => ({
        ...user,
        orderTotal: user.orders.reduce((total, order) => total + order.amount, 0),
      }))
    );
  }
}
