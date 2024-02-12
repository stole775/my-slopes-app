export class AccommodationAd {
    constructor(
      public accommodationAdID: number,
      public providerUserID: number,
      public title: string,
      public description: string,
      public pricePerNight: number,
      public location: string,
      public capacity: number,
      public isFeatured: boolean,
      public featuredUntil: Date | null,
      public createdAt: Date,
      public updatedAt: Date
    ) {}
  }
  