import { Routes } from '@angular/router';
import { UserListComponent } from '../app/components/user-list/user-list.component';
import { HomeComponent } from '../app/components/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'users',
    component: UserListComponent,
  },
];