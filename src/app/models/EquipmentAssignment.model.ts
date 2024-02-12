export class EquipmentAssignment {
    constructor(
      public assignmentID: number,
      public equipmentID: number,
      public instructorUserID: number,
      public assignedDate: Date,
      public returnDate: Date | null,
      public status: 'Assigned' | 'Returned',
      public createdAt: Date,
      public updatedAt: Date | null
    ) {}
  }
  