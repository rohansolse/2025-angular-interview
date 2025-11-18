import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable()
export class UserService {
  getUsers(count: number): User[] {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `User #${i + 1}`,
    }));
  }
}
