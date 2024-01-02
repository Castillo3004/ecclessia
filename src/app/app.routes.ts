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
        path: 'reservar-bautizmo',
        title: 'Reservar Bautizmo',
        loadComponent: () => import('./landing/pages/reserva-bautizmo/reserva-bautizmo.component')
        },
      {
        path: 'parroquias',
        title: 'Parroquias',
        loadComponent: () => import('./landing/pages/parroquias/parroquias.component'),
      },
      {
        path: 'parroquia/:id',
        title: 'Parroquia',
        loadComponent: () => import('./landing/pages/parroquia/parroquia.component'),

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
      { path: 'register', loadComponent: () => import('./auth/pages/register/register.component') },
      { path: '', redirectTo: '/login', pathMatch: 'full'}
    ]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./admin/admin.component'),
    children: [
      { path: 'inicio', loadComponent: () => import('./admin/pages/inicio/inicio.component') },
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    ]
  }

];
