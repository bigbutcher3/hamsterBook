import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = [];
  images = [];
  texts = [];

  constructor() { }

  addFriend(name:string, text:string, image:string) {
    this.names.push(name);
    this.images.push(image);
    this.texts.push(text);
  }
}
