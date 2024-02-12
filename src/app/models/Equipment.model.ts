export class Equipment {
    constructor(
      public equipmentID: number,
      public schoolUserID: number,
      public name: string,
      public description: string,
      public quantity: number,
      public status: 'Available' | 'NotAvailable',
      public updatedAt: Date
    ) {}
  }
  