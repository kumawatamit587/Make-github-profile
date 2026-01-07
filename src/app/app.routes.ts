import { Routes } from '@angular/router';
import { Overview } from './components/overview/overview';
import { Packages } from './components/packages/packages';
import { Projects } from './components/projects/projects';
import { Repositories } from './components/repositories/repositories';

export const routes: Routes = [
  { path: 'overview', component: Overview },
  { path: 'repositories', component: Repositories },
  { path: 'projects', component: Projects },
  { path: 'packages', component: Packages },
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
];
