import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { News } from '../../models/news';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

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
    public afAuth: AngularFireAuth,
    public loginService: LoginService,
    private afStorage: AngularFireStorage
  ) {
    this.createForm();
  }

  createForm() {
    this.createNewsForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      file: null,
      author: this.loginService.getMe().displayName
    });
  }

  uploadPercent: Observable<number>;
  downloadURL: Observable<number>;


  upload(event) {
    console.log(event)
    this.createNewsForm.patchValue({
      file: event.target.files[0]})
  }
  tryPost(){
    
    if (this.createNewsForm.value.file){
      const file = this.createNewsForm.value.file;
      const filePath = `images/news/${new Date().getTime()}_${file.name}`;
      const fileRef = this.afStorage.ref(filePath);
      const task = this.afStorage.upload(filePath, file);

      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      // get notified when the download URL is available
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            console.log(url); // <-- do what ever you want with the url..
            this.newsItem = {
              title: this.createNewsForm.value.title,
              body: this.createNewsForm.value.body,
              date: Date.now().toString(),
              image: url,
              author: this.createNewsForm.value.author
            };


            this.newsListService.addNews(this.newsItem);
            this.router.navigate(['/'])
          });
        })
      )
        .subscribe()

    }else{
      console.log('we  DO NOT got a file');
      this.newsItem = {
        title: this.createNewsForm.value.title,
        body: this.createNewsForm.value.body,
        date: Date.now().toString(),
        author: this.createNewsForm.value.author
      };


      this.newsListService.addNews(this.newsItem);
      this.router.navigate(['/'])

    }
   

      
     
/*
    if (this.downloadURL){
      this.newsItem = {
        title: this.createNewsForm.value.title,
        body: this.createNewsForm.value.body,
        date: Date.now().toString(),
        image: this.downloadURL,
        author: this.createNewsForm.value.author
      };
  
  
      this.newsListService.addNews(this.newsItem);
      this.router.navigate(['/'])
    }
     */
  }


  ngOnInit() {
    //console.log(this.newsFeed)
    console.log(this.authService.getMe())
  }
}