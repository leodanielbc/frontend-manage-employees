import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  employeeForm: Employee = {
    employee_id: '',
    name: '',
    age: 0,
    position: '',
  };

  constructor(
    private employeeService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var employee_id = String(param.get('employee_id'));
      this.getById(employee_id);
    });
  }

  getById(employee_id: string) {
    this.employeeService.getById(employee_id).subscribe((data: any) => {
      this.employeeForm = data.body;
    });
  }

  update() {
    this.employeeService.update(this.employeeForm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
