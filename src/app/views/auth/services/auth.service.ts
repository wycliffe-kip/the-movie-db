import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = '0e34ff80-3ccd-4403-bac0-08daeef7e171:DwoAo3dA9EtgAQAA:n9kFXeS9C6JeVhiZcUSa2gPC2lQiHTSrewUgFKRnrR7Q4gM7/t3LRBgiDDhbANnDMX7oxHjRFeGqB4GCpJjjlkd9feq1vbCE2HZ2K/obDvA9bU4ZUYf74R0EM0zvljnsHtXLwZg8ctenTWGfKB+LdVBi7DTQUd5vrXsenDmx6B39vCb0fDt/SJ8P8SkXIvC4lzzW27t7iRkUBUAUYQWLTVfQDiRCe8/SpzBJPhylUz8x7P6XwV1GYkzGdYo=';

  constructor() {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  login(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
