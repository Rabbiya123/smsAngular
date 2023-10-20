import { AuthServiceService } from './../auth-service.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserdataserviceService } from '../userdataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-agent-home',
  templateUrl: './agent-home.component.html',
  styleUrls: ['./agent-home.component.css'],
})
export class AgentHomeComponent {
  userData: any;
  Islogging: boolean = false;
  constructor(
    private userDataService: UserdataserviceService,
    private route: ActivatedRoute,
    private router: Router,
    private HttpClient: HttpClient,
    public authService: AuthServiceService
  ) {}

  ngOnInit() {
    this.userData = this.userDataService.getUserData();
  }

  startChat() {
    this.router.navigate(['/agent-chat']).then((nav) => {
      if (nav) {
        console.log('Going to the ChatApps');
      }
    });

    //   if (!this.authservice.isLoggedIn()) {
    //     this.router.navigate(['/login']);
    //   }
    // }
  }
  logout(): void {
    this.authService.logout().subscribe(
      () => {
        console.log('Logout successful');
        this.authService.clearToken();
        // this.router.navigate(['/login']);

        this.Islogging = false;
      },
      (error) => {
        console.error('Logout failed:', error);
      }
    );
  }
}
