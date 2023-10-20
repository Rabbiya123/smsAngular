import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent {
  userMessage = '';
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
      // The 'messages' parameter should be of type 'string[]'
      console.log('Message from server:', messages);
      this.messages.push(...messages);
    });
  }

  sendMessage() {
    this.userService.sendMessage(this.userMessage);
    console.log(
      'This is the message sent from the client side',
      this.userMessage
    );
    this.userMessage = '';
  }
}
