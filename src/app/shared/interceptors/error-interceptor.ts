import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';
import {Observable, Subject} from 'rxjs';
import {bufferTime, filter, tap} from 'rxjs/operators';

class Message {
  severity: 'success' | 'error';
  status: number;
  text: string;
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  private message$ = new Subject<Message>();

  constructor(
    private messageService: MessageService
  ) {
    this.init();
  }

  init() {
    this.message$.pipe(
      bufferTime(1_000),
      filter(messages => Boolean(messages.length)),
    ).subscribe(messages => {
      const succeededMessages = messages.filter(message => message.severity === 'success');
      if (succeededMessages.length) {
        this.messageService.add({
          severity: 'success',
          summary: `Succeeded operations: ${succeededMessages.length}`,
          detail: this.getNotificationText(succeededMessages),
        });
      }
      const failedMessages = messages.filter(message => message.severity === 'error');
      if (failedMessages.length) {
        this.messageService.add({
          severity: 'error',
          summary: `Failed operations: ${failedMessages.length}`,
          detail: this.getNotificationText(failedMessages),
        });
      }
    });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(tap(
      (event) => {
        if (event instanceof HttpResponse) {
          if (req.method === 'PUT' || req.method === 'PATCH') {
            this.message$.next({severity: 'success', status: event.status, text: 'Successfully Updated'});
          }
          if (req.method === 'POST') {

            this.message$.next({severity: 'success', status: event.status, text: 'Successfully Created'});
          }
          if (req.method === 'DELETE') {
            this.message$.next({severity: 'success', status: event.status, text: 'Successfully Deleted'});
          }
        }
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400 || err.status === 404 || err.status === 502 || err.status === 403) {
            this.message$.next({severity: 'error', status: err.status, text: JSON.stringify(err.error.data)});
          }

        }
      }),
    );
  }

  private getNotificationText(messages: Message[]) {
    return messages
      .map((message) => `${message.status}: ${message.text}`)
      .join(';\r\n');
  }
}
