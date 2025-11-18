import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';
import { VirtualScrollListComponent } from './components/virtual-scroll-list/virtual-scroll-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'virtual-scroll',
    component: VirtualScrollListComponent,
  },
];