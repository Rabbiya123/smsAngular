import { AgentService } from './../agent.service';
import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { WebSocketService } from '../web-socket.service';
import { UserdataserviceService } from '../userdataservice.service';

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
  userlist: any[] = [];

  selectedUser: any;
  isLoggedIn: boolean = false;
  userMessage: string = '';
  userData: any;
  agentMessage = '';
  Islogging: boolean = false;
  loginuser: any;
  constructor(
    private authService: AuthServiceService,
    private websocketService: WebSocketService,
    private userdata: UserdataserviceService,
    private AgentService: AgentService
  ) {
    this.websocketService.connectionStatus().subscribe((status) => {
      this.connected = status;
      console.log('connected to socket', status);
    });

    this.isLoggedIn = this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    const token = this.authService.getToken();
    const decodedToken = this.authService.decodeToken(token);

    if (decodedToken) {
      this.Islogging = true;
      this.loginuser = decodedToken.username;
    }

    this.AgentService.getOtherUsers().subscribe(
      (users: any[]) => {
        this.userlist = users;

        if (this.userlist.length > 0) {
          this.selectedUser(this.userlist[0]);
        }
      },
      (error) => {
        console.error('Error fetching other users:', error);
      }
    );

    this.websocketService.getMessages().subscribe((messages: any[]) => {
      console.log('Message from server:', messages);
      this.messages = messages;
    });
  }

  sendMessage(message: string) {
    this.messages.push({ text: this.agentMessage, sender: 'user' });
    this.agentMessage = '';
    this.websocketService.sendAgentMessage(message, this.loginuser);
    console.log('this has been sent to the server', message);
  }

  selectUser(user: any) {
    this.selectedUser = user;
  }
}
