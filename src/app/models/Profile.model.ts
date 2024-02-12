export class Profile {
    constructor(
      public profileID: number,
      public userID: number,
      public fullName: string,
      public profilePictureURL: string,
      public contactInfo: string,
      public bio: string,
      public createdAt: Date
    ) {}
  }
  