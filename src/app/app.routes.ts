import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./landing/landing.component'),
    title: 'Landing',
    children: [
      {
        path: 'inicio',
        title: 'Inicio',
        loadComponent: () => import('./landing/pages/inicio/inicio.component'),
      },
      {
        path: 'servicios',
        title: 'Servicios',
        loadComponent: () => import('./landing/pages/servicios/servicios.component'),
      },
      {
        path: 'parroquias',
        title: 'Parroquias',
        loadComponent: () => import('./landing/pages/parroquias/parroquias.component'),
      },
      {
        path: 'sobre-nosotros',
        title: 'Sobre Nosotros',
        loadComponent: () => import('./landing/pages/sobre-nosotros/sobre-nosotros.component')
      },
      {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component'),
    children: [
      { path: 'login', loadComponent: () => import('./auth/pages/login/login.component') },
      { path: '', redirectTo: '/login', pathMatch: 'full'}
    ]
  },

];
