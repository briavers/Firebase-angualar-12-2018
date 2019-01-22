import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from "firebase";
import { first, tap,take, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  private canActivateThis = false;
  
  constructor(public afAuth: AngularFireAuth, public router: Router) { }

  canActivate(): Observable<boolean> {
    return this.afAuth.authState.pipe(
      map(authState => {
        if(authState) {
         return true
        }else{
          this.router.navigate(['/login']);
          return false
        }
        return !authState;
      }),
      take(1)
    )
  }
 


}
