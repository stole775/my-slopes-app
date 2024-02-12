export class User {
    constructor(
      public userID: number,
      public email: string,
      public username: string,
      public passwordHash: string,
      public role: 'Admin' | 'User' | 'Instructor' | 'School' | 'Support' | 'Adminlvl2' | 'Promotion',
      public isVerified: boolean,
      public isBlocked: boolean,
      public createdAt: Date
    ) {}
  }
  