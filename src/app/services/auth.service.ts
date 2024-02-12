import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; // Promenite prema vašem API endpointu

  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(email: string, password: string) {
    return this.http.post<{ token: string, user: User }>(`${this.apiUrl}/login`, { email, password });
  }
}
