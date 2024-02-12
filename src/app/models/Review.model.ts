export class Review {
    constructor(
      public reviewID: number,
      public forUserID: number,
      public fromUserID: number,
      public rating: number,
      public comment: string,
      public createdAt: Date
    ) {}
  }
  