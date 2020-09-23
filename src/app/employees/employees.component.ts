import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {EmployeeState} from "./store/reducers/employee.reducer";
import * as EmployeeActions from './store/actions/employee.actions';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private store: Store<EmployeeState>) { }

  ngOnInit(): void {
    this.store.dispatch(EmployeeActions.loadEmployees());
  }

}
