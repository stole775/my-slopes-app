import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/Transaction.model';
import { UserCredit } from '../models/UserCredit.model';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:3000/api/payment'; // API endpoint za plaćanje

  constructor(private http: HttpClient) { }



  addCredits(userId: number, amount: number) {
    // Pretpostavka da ovaj zahtev vraća ažurirane kredite korisnika
    return this.http.post<UserCredit>(`${this.apiUrl}/addCredits`, { userId, amount });
  }

  // Metoda za plaćanje koja koristi Transaction model za odgovor
  payForAd(adId: number, userId: number) {
    return this.http.post<Transaction>(`${this.apiUrl}/payForAd`, { adId, userId });
  }
}
