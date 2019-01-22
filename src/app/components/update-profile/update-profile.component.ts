import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.sass']
})
export class UpdateProfileComponent implements OnInit {
  userItem;
  updateProfileForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: LoginService,
    private router: Router,
    private fb: FormBuilder,
    private newsListService: FirebaseService,
    public afAuth: AngularFireAuth,
    public loginService: LoginService
  ) {
    this.createForm();
  }

  createForm() {
    this.updateProfileForm = this.fb.group({
      displayName: [this.loginService.getMe().displayName, Validators.required],
    });
  }



  tryPost() {
    this.userItem = {
      displayName: this.updateProfileForm.value.displayName,
    };


    this.loginService.updateName(this.userItem).catch(err => console.error(err));
    this.router.navigate(['/create-news'])
  }


  ngOnInit() {
    //console.log(this.newsFeed)
    console.log(this.authService.getMe())
  }
}