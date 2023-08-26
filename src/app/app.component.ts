import { Component, OnInit, inject } from '@angular/core';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  protected readonly settingsService = inject(SettingsService);
 

  protected settings: any;

  ngOnInit(): void {
    this.settingsService.settings.subscribe(v => this.settings = v);
  }
}
