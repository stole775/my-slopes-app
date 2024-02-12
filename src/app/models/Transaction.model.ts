export class Transaction {
    constructor(
      public transactionID: number,
      public userID: number,
      public amount: number,
      public transactionType: 'CreditPurchase' | 'AdPromotion',
      public createdAt: Date
    ) {}
  }
  