import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: Employee = {
    employee_id: '',
    name: '',
    position: '',
    age: 0,
  };

  constructor(
    private employeeService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create() {
    this.employeeService.create(this.employeeForm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
