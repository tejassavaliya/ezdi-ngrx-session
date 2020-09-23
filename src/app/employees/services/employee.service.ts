import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/employee";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl =  `http://localhost:3000/employees`;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`).pipe(
      map( (employees) => employees )
    );
  }

  getEmployee(empId: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/${empId}`).pipe(
      map( (employee) => employee )
    );
  }
}
