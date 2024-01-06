import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Contactanos } from '../interfaces/contactanos';

@Injectable({
  providedIn: 'root'
})
export class ContactanosService {

  private firestore = inject( Firestore );


  addContactanos(contactanos: Contactanos ){
    const contactanosRef = collection(this.firestore, 'contactanos' );
    return addDoc(contactanosRef, contactanos );

  }

}
