export class ClassAd {
    constructor(
      public classAdID: number,
      public instructorUserID: number,
      public title: string,
      public description: string,
      public pricePerHour: number,
      public skillLevel: 'Beginner' | 'Intermediate' | 'Advanced',
      public createdAt: Date
    ) {}
  }
  