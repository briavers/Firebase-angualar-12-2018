import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { take, map } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  public loggedIn; 
  constructor(public afAuth: AngularFireAuth, public router: Router, public authService: LoginService) { }
  


  ngOnInit() {
    console.log('navBar  on init')
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user is logged in');
        this.loggedIn = true
      } else {
        console.log('user not logged in');
        this.loggedIn = false
      }
    });
  }
  logOut() {
    this.authService.doLogout();
  }
}
