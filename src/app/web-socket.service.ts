import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket: any;
  private connected$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private messages$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(
    []
  );

  constructor(private http: HttpClient) {
    this.socket = io('http://localhost:3000', {
      transports: ['websocket', 'polling'],
    });

    this.socket.on('connect', () => {
      console.log('connected ok');
      this.connected$.next(true);
    });

    this.socket.on('connect_error', (err: any) => {
      console.log('error', err);
      this.connected$.next(false);
    });

    this.socket.on('agentMessage', (message: string) => {
      const updatedMessages = [...this.messages$.value, message];
      this.messages$.next(updatedMessages);
    });
  }

  connectionStatus() {
    return this.connected$.asObservable();
  }

  getMessages() {
    return this.messages$.asObservable();
  }

  sendAgentMessage(message: string, name: any) {
    this.socket.emit('agentMessage', {
      type: 'agentMessage',
      text: message,
      agentName: name,
    });
  }
}
