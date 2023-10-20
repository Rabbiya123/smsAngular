import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-agent-chat',
  templateUrl: './agent-chat.component.html',
  styleUrls: ['./agent-chat.component.css'],
})
export class AgentChatComponent {
  connected: boolean = false;
  messages: any[] = [
    {
      text: '',
    },
  ];
  isLoggedIn: boolean = false;
  userMessage: string = '';

  constructor(
    private authService: AuthServiceService,
    private websocketService: WebSocketService
  ) {
    this.websocketService.connectionStatus().subscribe((status) => {
      this.connected = status;
      console.log('connected to socket', status);
    });

    this.isLoggedIn = this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    this.websocketService.getMessages().subscribe((messages: any[]) => {
      // The 'messages' parameter should be of type 'string[]'
      console.log('Message from server:', messages);
      this.messages.push(...messages);
    });
  }

  sendMessage(message: string) {
    this.websocketService.sendAgentMessage(message);
    console.log('this has been sent to the server', message);
  }
}
