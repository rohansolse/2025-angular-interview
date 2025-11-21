import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { VirtualScrollListComponent } from './components/virtual-scroll-list/virtual-scroll-list.component';
import { WorkerDemoComponent } from './components/worker-demo/worker-demo.component';
import { SwitchMapDemoComponent } from './components/switch-map-demo/switch-map-demo.component';
import { ParentComponent } from './view-child-demo/parent/parent.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'users/:id', // Route for a specific user profile
    component: UserProfileComponent,
  },
  {
    path: 'virtual-scroll',
    component: VirtualScrollListComponent,
  },
  {
    path: 'worker-demo',
    component: WorkerDemoComponent,
  },
  {
    path: 'switch-map-demo',
    component: SwitchMapDemoComponent,
  },

  { path: 'view-child', component: ParentComponent },
];
