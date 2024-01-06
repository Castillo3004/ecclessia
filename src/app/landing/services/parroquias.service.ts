import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { doc } from 'firebase/firestore';

import { Parroquia } from '../interfaces/parroquia';


@Injectable({
  providedIn: 'root'
})
export class ParroquiasService {

  private firestore = inject(Firestore);

  constructor() {
  }


  getParroquias(): Observable<Parroquia[]> {
    const parroquias = collection(this.firestore, 'datos-parroquias');
    return collectionData(parroquias, { idField: 'id' }) as Observable<Parroquia[]>
  }

  getParroquiaById(id: string): Observable<Parroquia>{
    const parroquiaRef = doc(this.firestore, `datos-parroquias/${ id }`);
    return docData(parroquiaRef) as Observable<Parroquia>

  }


}
