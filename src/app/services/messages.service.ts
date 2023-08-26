import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messagesList: string[] = [];
  private $messages:BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  public messages = this.$messages.asObservable();

  public newMessage(message:string) {
    console.log(message)
    this.messagesList.push(message);
    this.$messages.next(this.messagesList);
  }
}
