import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, delay, tap } from 'rxjs';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsService
{
  private messageService = inject(MessagesService);
  private $settings = new BehaviorSubject({test:'adsf'});

  private $loading = new Subject<boolean>();

  // simuliert das Laden der settings, verzögert diese um 1500ms und ändert die Werte des loading Subjects
  public readonly settings = this.$settings;

  public readonly loading = this.$loading.asObservable();

  public uploadSettings(newSettings:any) {
    this.$loading.next(true);
    this.messageService.newMessage("Settings werden hochgeladen")
    setTimeout(() => {
      this.$loading.next(false);
      this.messageService.newMessage("Settings wurden erfolgreich hochgeladen");
      this.$settings.next(JSON.parse(newSettings));
    }, 2000)
  }

}
