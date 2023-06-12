import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  url= '';
  constructor(private httpClient: HttpClient) {
    this.url = 'https://vkzx72gb2c.execute-api.us-east-1.amazonaws.com';
  }

  get(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.url}/employee`);
  }

  create(payload: Employee) {
    return this.httpClient.post<Employee>(
      `${this.url}/employee`,
      payload
    );
  }

  getById(employee_id: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.url}/employee/${employee_id}`);
  }

  update(payload: Employee): Observable<Employee> {
    const dataToUpdate = {
      name: payload.name,
      newPosition: payload.position,
      age: payload.age,
    }
    return this.httpClient.put<Employee>(
      `${this.url}/employee/${payload.employee_id}`,
      dataToUpdate
    );
  }

  delete(employee_id: string) {
    return this.httpClient.delete(`${this.url}/employee/${employee_id}`);
  }
}
