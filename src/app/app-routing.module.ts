import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { BackOfficeComponent } from './components//back-office/back-office.component';
import { BackOfficeRoomsComponent } from './components/back-office-rooms/back-office-rooms.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-news', component: BackOfficeComponent, canActivate: [AuthGuard],  },
  { path: 'rooms', component: BackOfficeRoomsComponent, canActivate: [AuthGuard],  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
 // { path: '*', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
