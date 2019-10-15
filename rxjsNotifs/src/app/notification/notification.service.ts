import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NotificationType, Notification } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private subject = new Subject<Notification>();
  private idx = 0;

  constructor() { }

  getObservable(): Observable<Notification> {
    return this.subject.asObservable();
  }

  info(title: string, message: string, timeout = 5000) {
    this.subject.next(new Notification(this.idx++, NotificationType.INFO, title, message, timeout));
  }

  success(title: string, message: string, timeout = 5000) {
    this.subject.next(new Notification(this.idx++, NotificationType.SUCCESS, title, message, timeout));
  }

  warning(title: string, message: string, timeout = 5000) {
    this.subject.next(new Notification(this.idx++, NotificationType.WARNING, title, message, timeout));
  }

  error(title: string, message: string, timeout = 5000) {
    this.subject.next(new Notification(this.idx++, NotificationType.ERROR, title, message, timeout));
  }

}
