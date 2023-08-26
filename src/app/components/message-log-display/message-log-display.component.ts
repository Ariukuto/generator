import { Component, OnInit, inject } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'message-log-display',
  templateUrl: './message-log-display.component.html',
  styleUrls: ['./message-log-display.component.scss']
})
export class MessageLogDisplayComponent 
{
  protected readonly messageService = inject(MessagesService);
  protected messages?: string[];

  ngOnInit(): void {
    this.messageService.messages.subscribe(v => this.messages = v)
  }
}
