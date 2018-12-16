import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'
import { News } from '../../models/news';
import { FirebaseService } from '../../services/firebase.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  newsFeed
  constructor(private newsListService: FirebaseService, public authService: LoginService) {
    this.newsFeed = this.newsListService.getNewsList()
      .snapshotChanges()
      .pipe(
        map(
          changes =>
            changes.map(c => ({
              key: c.payload.key, ...c.payload.val()
              
            }))
        )
      );
    console.log('done Constuctor')
    console.log(this.newsFeed)
  }

  ngOnInit() {
    //console.log(this.newsFeed)
    
  }

 
}

