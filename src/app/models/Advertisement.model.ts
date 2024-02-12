export class Advertisement {
    constructor(
      public AdID: number,
      public userID: number,
      public Title: string | null,
      public Description: string | null,
      public ImageUrl: string,
      public TargetUrl: string | null,
      public AdType: 'ImageOnly' | 'Promotion',
      public IsFeatured: boolean,
      public FeaturedUntil: Date | null,
      public CreatedAt: Date,
      public ExpiresAt: Date,
      public Status: 'Active' | 'Inactive'
    ) {}
  }
  