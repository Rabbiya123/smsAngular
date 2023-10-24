import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserdataserviceService } from '../userdataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  userData: any;
  Islogging: boolean = false;
  loginuser: any;
  constructor(
    private userDataService: UserdataserviceService,
    private route: ActivatedRoute,
    private router: Router,
    private HttpClient: HttpClient,
    public authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    const decodedToken = this.authService.decodeToken(token);

    if (decodedToken) {
      this.Islogging = true;
      this.loginuser = decodedToken.username;
    }

    // this.userData = this.userDataService.getUserData();
    // if (this.userData) {
    //   this.Islogging = true;
    //   this.loginuser = this.userData.username;
    // }
  }

  startChat() {
    this.router.navigate(['/agent-chat']).then((nav) => {
      if (nav) {
        console.log('Going to the ChatApps');
      }
    });
  }
  logout(): void {
    console.log('Logout successful');
    this.authService.clearToken();
    // this.router.navigate(['/agent-login']);
    this.Islogging = false;
  }
}
