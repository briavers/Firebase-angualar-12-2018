import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomeComponent } from './components/home/home.component';
import { TimePipe } from './pipes/time.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BackOfficeComponent } from './components/back-office/back-office.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { BackOfficeRoomsComponent } from './components/back-office-rooms/back-office-rooms.component';

const firebaseAuth = {
  apiKey: "AIzaSyAffOFfFFr1jyCjss8kd_MlWX5uce_uH_M",
  authDomain: "wot-studentguide.firebaseapp.com",
  databaseURL: "https://wot-studentguide.firebaseio.com",
  projectId: "wot-studentguide",
  storageBucket: "",
  messagingSenderId: "999157797346"

}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TimePipe,
    BackOfficeComponent,
    NavbarComponent,
    BackOfficeRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireAuthModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
