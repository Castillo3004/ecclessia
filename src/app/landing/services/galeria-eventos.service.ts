import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GaleriaEventos } from '../interfaces/card-galeria-eventos';


@Injectable({
  providedIn: 'root'
})
export class GaleriaEventosService {

  private firestore = inject(Firestore);

  constructor() { }


  getGaleriaAeventos(): Observable<GaleriaEventos[]>{
    const galeriaEventos = collection( this.firestore, 'galeria-eventos' );
    return collectionData(galeriaEventos, { idField: 'id' }) as Observable<GaleriaEventos[]>;
  }

}
