import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Team } from '../interfaces/team';


@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private firestore = inject( Firestore );


  getTeam(): Observable<Team[]>{
   const team = collection(this.firestore, 'team-eclessia');
   return collectionData(team, { idField: 'id' }) as Observable<Team[]>;
  }


}
