import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private tokenKey = 'auth-token';
  private user: any;
  private baseUrl = 'http://localhost:3000';
  private token: string | null = null;
  constructor(private http: HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  clearToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  login(credentials: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/login', credentials);
  }

  setUser(user: any): void {
    this.user = user;
  }

  getUser(): any {
    return this.user;
  }

  logout(): Observable<any> {
    // Use this.getToken() to retrieve the token
    const token = this.getToken();

    if (!token) {
      console.error('No token available for logout.');

      return new Observable();
    }

    const headers = new HttpHeaders({
      Authorization: token,
    });

    return this.http.get(`${this.baseUrl}/logout`, { headers });
  }

  getUsername(): string | undefined {
    return this.user ? this.user.username : undefined;
  }
}
