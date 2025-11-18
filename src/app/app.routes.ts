import { Routes } from '@angular/router';
import { UserListComponent } from './component/user-list.component';

export const routes: Routes = [
    {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'users',
    component: UserListComponent,
  },
];