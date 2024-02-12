export class ScheduledClass {
    constructor(
      public scheduledClassID: number,
      public classAdID: number,
      public studentUserID: number,
      public scheduledDate: Date,
      public startTime: Date,
      public endTime: Date,
      public status: 'Scheduled' | 'Cancelled' | 'Completed',
      public createdAt: Date,
      public updatedAt: Date
    ) {}
  }
  