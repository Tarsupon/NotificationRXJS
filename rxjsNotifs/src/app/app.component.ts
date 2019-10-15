import { Component } from '@angular/core';
import { NotificationService } from './notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjsNotifs';

  constructor(private notifService: NotificationService) { }

  sendInfo() {
    this.notifService.info('Hello World', 'This is an information');
  }

  sendSuccess() {
    this.notifService.success('Hello World', 'This is a success !');
  }

  sendWarning() {
    this.notifService.warning('Hello World', 'This is a warning !');
  }

  sendError() {
    this.notifService.error('Hello World', 'This is an error :(');
  }
}
