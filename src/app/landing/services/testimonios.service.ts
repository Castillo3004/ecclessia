import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Testimonio } from '../interfaces/testimonios';


@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {

  private firestore = inject( Firestore );


  getTestimonios(): Observable<Testimonio[]>{
    const testimonios = collection(this.firestore, 'testimonios' );
    return collectionData(testimonios, { idField: 'id' }) as Observable<Testimonio[]>;
  }



}
