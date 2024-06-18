import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadChildren: () =>
      import('@public/public.routes').then((c) => c.PublicRoutes),
  },
  {
    path: '404',
    loadComponent: () =>
      import('@shared/pages').then((c) => c.NotFoundComponentComponent),
  },
  {
    path:'**',
    redirectTo: '404',
  }
];
