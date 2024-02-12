import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl = 'http://localhost:3000/api'; // Osnovna adresa vašeg API-a

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }
  
  // Primer za ažuriranje korisnika
  updateUser(user: User) {
    return this.http.put(`${this.apiUrl}/users/${user.userID}`, user);
  }
  // Dodajte ostale CRUD metode po potrebi
}
