import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {NzMessageService} from 'ng-zorro-antd/message';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// Define the interceptor interface (though Angular already provides HttpInterceptor)
export interface CustomInterceptor extends HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}

// Example implementation of an HTTP interceptor
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private messageService: NzMessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add any headers or modify it
    const modifiedReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    // Optional: Show loading message
    const loadingId = this.messageService.loading('Request in progress...').messageId;

    // Pass the modified request to the next handler
    return next.handle(modifiedReq).pipe(
      finalize(() => {
        // Remove loading message when request completes
        this.messageService.remove(loadingId);
      })
    );
  }
}


