import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { News } from '../../models/news';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.sass']
})
export class BackOfficeComponent implements OnInit {
  newsItem: News;
  createNewsForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: LoginService,
    private router: Router,
    private fb: FormBuilder,
    private newsListService: FirebaseService,
    public afAuth: AngularFireAuth
  ) {
    this.createForm();
  }

  createForm() {
    this.createNewsForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      link: ['', Validators.required],
      author: ['', Validators.required]
    });
  }
  
  

  tryPost(value){



    this.newsItem = { 
      title: this.createNewsForm.value.title, 
      body: this.createNewsForm.value.body,
      date: Date.now().toString(),
      image: this.createNewsForm.value.link,
      author: this.createNewsForm.value.author
    };


    this.newsListService.addNews(this.newsItem);
    this.router.navigate(['/'])
  }


  ngOnInit() {
    //console.log(this.newsFeed)

  }
}