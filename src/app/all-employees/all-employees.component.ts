import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogEmployeeComponent } from '../delete-dialog-employee/delete-dialog-employee.component';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css'],
})
export class AllEmployeesComponent implements OnInit {
  allEmployeesSource: Employee[] = [];
  displayedColumns: string[] = [
    'employee_id',
    'name',
    'age',
    'position',
    'actions',
  ];

  constructor(
    private employeeService: EmployeesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.employeeService.get().subscribe((data: any) => {
      this.allEmployeesSource = data.body.employees;
    });
  }

  openDeleteModal(employee_id: string) {
    const dialogRef = this.dialog.open(DeleteDialogEmployeeComponent, {
      width: '250px',
      data: { employee_id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allEmployeesSource = this.allEmployeesSource.filter(
          (_) => _.employee_id !== employee_id
        );
      }
    });
  }
}
