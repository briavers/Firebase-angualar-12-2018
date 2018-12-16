import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public afAuth: AngularFireAuth, public router: Router) { }

doRegister(value){
  return new Promise<any>((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
  })
}

doLogin(value){
  return new Promise<any>((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
  })
}

doLogout(){
  return new Promise((resolve, reject) => {
    if (firebase.auth().currentUser) {
      this.afAuth.auth.signOut()
      this.router.navigate(['/login']);
      resolve();
    }
    else {
      reject();
      console.log('NO USER')
    }
  });
}


}