import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-delete-dialog-employee',
  templateUrl: './delete-dialog-employee.component.html',
  styleUrls: ['./delete-dialog-employee.component.css'],
})
export class DeleteDialogEmployeeComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeesService
  ) {}

  ngOnInit(): void {}

  confirmDelete() {
   this.employeeService.delete(this.data.employee_id).subscribe(() => {
      this.dialogRef.close(this.data.employee_id);
    });
  }
}
