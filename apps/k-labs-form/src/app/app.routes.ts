import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'forms', pathMatch: 'full' },
  {
    path: 'forms',
    loadComponent: () =>
      import('./features/form-list/form-list-page.component'),
  },
];
