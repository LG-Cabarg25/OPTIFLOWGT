import { Routes } from '@angular/router';



export const PrivateRoutes : Routes = [
{
  path: '',
  loadComponent: ()=> import('./pages').then((m)=>m.DashboardComponent),
  children:[

  ]
}
]
