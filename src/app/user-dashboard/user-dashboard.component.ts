import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent {
  userMessage = '';
  mostRecentAgentMessage: string = '';
  messages: any[] = [
    {
      text: '',
    },
  ];

  showChatContainer: boolean = false;
  constructor(private userService: UserServiceService) {}

  toggleChatContainer() {
    this.showChatContainer = !this.showChatContainer;
  }
  ngOnInit(): void {
    this.userService.getMessages().subscribe((messages: string[]) => {
      console.log('Messages from server:', messages);
      this.messages = messages;
    });
  }

  sendMessage() {
    this.userService.sendMessage(this.userMessage);
    console.log(
      'This is the message sent from the client side',
      this.userMessage
    );
    this.messages.push({ text: this.userMessage, sender: 'user' });
    this.userMessage = '';
  }

  closeChatContainer() {
    this.showChatContainer = false;
  }
}
