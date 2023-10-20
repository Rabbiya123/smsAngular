import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { UserdataserviceService } from '../userdataservice.service'; // Create a user data service

@Component({
  selector: 'app-agent-login',
  templateUrl: './agent-login.component.html',
  styleUrls: ['./agent-login.component.css'],
})
export class AgentLoginComponent {
  c1 = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private userDataService: UserdataserviceService
  ) {}

  login() {
    this.authService.login(this.c1).subscribe(
      (response: any) => {
        console.log('Login successful');
        this.authService.setToken(response.token);
        this.userDataService.setUserData(response);
        this.router.navigate(['/agent-home']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
