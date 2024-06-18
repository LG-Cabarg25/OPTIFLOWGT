import { Routes } from '@angular/router';

export const PublicRoutes : Routes = [
  {
    path: '',
    loadComponent: ()=> import('./pages').then((m)=>m.LayoutPageComponent),
    children:[
      {
        path: '',
        loadComponent: ()=> import('./pages').then((m)=>m.HomePageComponent),
      },
      {
        path:'login',
        loadComponent: ()=> import('./pages').then((m)=>m.LoginPageComponent),
      },
      {
        path:'register',
        loadComponent: ()=> import('./pages').then((m)=>m.RegisterPageComponent),
      },
      {
        path:'logout',
        loadComponent: ()=> import('./pages').then((m)=>m.LogoutPageComponent)
      }
    ]
  }
]
