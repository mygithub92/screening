import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root",
})
export class TextMessageService {
  constructor(private http: HttpClient) {}

  sendMessage(messages) {
    return this.http
      .post(
        "https://3dn9mylwz2.execute-api.us-east-1.amazonaws.com/staging/message",
        messages
      )
      .toPromise();
  }
}
