import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { connectAuthEmulator, getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { connectFirestoreEmulator } from 'firebase/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions()
    ),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp( environment.firebase ))
    ),
    importProvidersFrom(
      provideAuth(() => {
        const auth = getAuth();
        connectAuthEmulator(auth, 'http://localhost:9091', { disableWarnings: true });
        return auth;
      }),
    ),
    importProvidersFrom(
      provideFirestore(() => {
        const firestore = getFirestore();
        connectFirestoreEmulator( firestore, 'http://localhost', 9092);
        return firestore;
      }),
    ),
  ]
};
