import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class WriteService {

  constructor(public fireservices: AngularFirestore) { }

  writeUserData(User) {
    return this.fireservices.collection('Users').add(User);
  }

}
