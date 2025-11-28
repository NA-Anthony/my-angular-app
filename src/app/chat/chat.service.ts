import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface MessageRequest {
  message: string;
}

interface MessageResponse {
  response: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://api-spring-app.onrender.com/api/chat';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<MessageResponse> {
    return this.http.post<MessageResponse>(this.apiUrl, { message });
  }
}
