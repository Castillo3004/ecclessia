import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { ReservaBautismo } from '../interfaces/reserva-bautismo';


@Injectable({
  providedIn: 'root'
})
export class ReservaBautizmoService {

  private firestore = inject( Firestore );


  addReservaBautismo(reservaBautismoDatos: ReservaBautismo ){
    const nombreParroquiaCorregido = reservaBautismoDatos.nombreParroquia.replace(" ", "-");
    const reservaBautismoRef = collection(this.firestore, `reserva-bautismo-${ nombreParroquiaCorregido }`);
    return addDoc( reservaBautismoRef, reservaBautismoDatos);

  }

}
