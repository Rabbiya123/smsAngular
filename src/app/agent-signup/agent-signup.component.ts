import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  Validators,
  NgForm,
  NgModel,
} from '@angular/forms';

interface User {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-agent-signup',
  templateUrl: './agent-signup.component.html',
  styleUrls: ['./agent-signup.component.css'],
})
export class AgentSignupComponent {
  user: User = {
    username: '',
    email: '',
    password: '',
  };
  submitted: boolean = false;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  isEmailRequired() {
    if (!this.user.email) {
      // alert('Email is required');
      return true;
    }
    return false;
  }

  isUsernameRequired() {
    if (!this.user.username) {
      return true;
    }
    return false;
  }

  isPasswordRequired() {
    if (this.user.password) {
      return true;
    }
    return false;
  }

  signup(form: any) {
    this.submitted = true;
    this.errorMessage = '';
    this.http.post('http://localhost:3000/signup', this.user).subscribe(
      (response) => {
        console.log(response);

        alert('You are Successfully Signup');
      },
      (error) => {
        console.error(error);

        if (error.error && error.error.error) {
          this.errorMessage = error.error.error;
        } else {
          this.errorMessage = 'An error occurred during signup.';
        }
      }
    );
  }
}
