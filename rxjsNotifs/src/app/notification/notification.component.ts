import { Component, OnInit, OnDestroy } from '@angular/core';
import { Notification, NotificationType } from '../models';
import { Subscription } from 'rxjs';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {

  public notifications: Notification[] = [];
  public notificationsStory: Notification[] = [];
  private subscription: Subscription;

  constructor(private notifService: NotificationService) { }

  ngOnInit() {
    this.subscription = this.notifService.getObservable().subscribe(notification => {
      this.addNotification(notification);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public close(notification: Notification) {
    this.notifications = this.notifications.filter(notif => notif.id !== notification.id);
  }

  public addNotification(notification: Notification) {
    this.notifications.push(notification);
    this.notificationsStory.push(notification);

    if (notification.timeout !== 0) {
      setTimeout(() => this.close(notification), notification.timeout);

    }
  }

  getClassName(notification: Notification): string {

    let style: string;

    switch (notification.type) {

      case NotificationType.SUCCESS:
        style = 'success';
        break;

      case NotificationType.WARNING:
        style = 'warning';
        break;

      case NotificationType.ERROR:
        style = 'error';
        break;

      default:
        style = 'info';
        break;
    }

    return style;
  }
}
