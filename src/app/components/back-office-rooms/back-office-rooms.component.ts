import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { News } from 'src/app/classes/news';
import { Rooms } from 'src/app/classes/rooms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-back-office-rooms',
  templateUrl: './back-office-rooms.component.html',
  styleUrls: ['./back-office-rooms.component.sass']
})
export class BackOfficeRoomsComponent implements OnInit {
  newsItem: News;
  roomItem: Rooms
  createRoomForm: FormGroup;
  EditRoomForm: FormGroup;
  errorMessage: string = '';
  classes;
  public theClass;
  constructor(
    public authService: LoginService,
    private router: Router,
    private fb: FormBuilder,
    private newsListService: FirebaseService,
    public afAuth: AngularFireAuth,
   
  ) {
    this.createForm();
  }

  createForm() {
    this.createRoomForm = this.fb.group({
      Room: ['', Validators.required],
    });

  }

 
  
  tryPost(value) {

    console.log(value);

    this.newsListService.updateRoom(value, this.theClass );
   // this.router.navigate(['/'])
  }


  ngOnInit() {
    //console.log(this.newsFeed)
    this.createRoomForm.valueChanges.subscribe(val => {
      console.log('this is classes b4 anything happens')
      this.theClass = val.Room
     // console.log(val)
     // console.log(this.classes)
      let that = this
      this.EditRoomForm = undefined
      this.classes = this.newsListService.getRoomList(val.Room).snapshotChanges()
        .pipe(
          map(
            changes =>
            changes.forEach(element => {
              //console.log(element.key);
              this.classes[element.key] = element.payload.val()
              //console.log('this.classes[element.key]')
              //console.log(this.classes.a1)
              //console.log(this.classes)
              this.EditRoomForm = this.fb.group({
                a1: this.classes.a1,
                a2: this.classes.a2,
                a3: this.classes.a3,
                a4: this.classes.a4,
                a5: this.classes.a5,
                a6: this.classes.a6,
                a7: this.classes.a7,
                a8: this.classes.a8,
                b1: this.classes.b1,
                b2: this.classes.b2,
                b3: this.classes.b3,
                b4: this.classes.b4,
                b5: this.classes.b5,
                b6: this.classes.b6,
                b7: this.classes.b7,
                b8: this.classes.b8,
                c1: this.classes.c1,
                c2: this.classes.c2,
                c3: this.classes.c3,
                c4: this.classes.c4,
                c5: this.classes.c5,
                c6: this.classes.c6,
                c7: this.classes.c7,
                c8: this.classes.c8,
                d1: this.classes.d1,
                d2: this.classes.d2,
                d3: this.classes.d3,
                d4: this.classes.d4,
                d5: this.classes.d5,
                d6: this.classes.d6,
                d7: this.classes.d7,
                d8: this.classes.d8,
                e1: this.classes.e1,
                e2: this.classes.e2,
                e3: this.classes.e3,
                e4: this.classes.e4,
                e5: this.classes.e5,
                e6: this.classes.e6,
                e7: this.classes.e7,
                e8: this.classes.e8,
                f1: this.classes.f1,
                f2: this.classes.f2,
                f3: this.classes.f3,
                f4: this.classes.f4,
                f5: this.classes.f5,
                f6: this.classes.f6,
                f7: this.classes.f7,
                f8: this.classes.f8,
              })
            }),
          )
        )
        
      if (this.EditRoomForm == undefined ){
        this.EditRoomForm = this.fb.group({
          a1: '',
          a2: '',
          a3: '',
          a4: '',
          a5: '',
          a6: '',
          a7: '',
          a8: '',
          b1: '',
          b2: '',
          b3: '',
          b4: '',
          b5: '',
          b6: '',
          b7: '',
          b8: '',
          c1: '',
          c2: '',
          c3: '',
          c4: '',
          c5: '',
          c6: '',
          c7: '',
          c8: '',
          d1: '',
          d2: '',
          d3: '',
          d4: '',
          d5: '',
          d6: '',
          d7: '',
          d8: '',
          e1: '',
          e2: '',
          e3: '',
          e4: '',
          e5: '',
          e6: '',
          e7: '',
          e8: '',
          f1: '',
          f2: '',
          f3: '',
          f4: '',
          f5: '',
          f6: '',
          f7: '',
          f8: '',
        })

      }
    });
  }
}