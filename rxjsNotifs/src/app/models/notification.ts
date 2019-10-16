export class Notification {
    constructor(
        public id: number,
        public type: NotificationType,
        public title: string,
        public message: string,
        public timeout: number,
    ) { }
}

export enum NotificationType {
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
    INFO = 'INFO'
}
