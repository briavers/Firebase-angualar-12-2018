import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { News } from '../models/news';
import { Rooms } from '../classes/rooms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private newsListRef = this.db.list<News>('news');
  private roomList = this.db.list<Rooms>('rooms');


  constructor(private db: AngularFireDatabase) { }

  getNewsList() {
    return this.newsListRef;
  }
  getRoomList(room) {
    return this.db.list<Rooms>('rooms/' + room);
  }
  updateRoom(room: Rooms, number) {
    return this.db.list<Rooms>('rooms/').set(number, room);
  }




  getNewsDetail(id) {
    return this.db.list<News>('news/' + id)
  }

  addNews(news: News) {
    return this.newsListRef.push(news);
  }



  updateNews(news: News) {
    return this.newsListRef.update(news.key, news);
  }

  removeNews(news: News) {
    return this.newsListRef.remove(news.key);
  }
}