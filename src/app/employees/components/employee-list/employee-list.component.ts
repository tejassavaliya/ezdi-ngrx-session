import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../../models/employee";
import {Store} from "@ngrx/store";
import {EmployeeState} from "../../store/reducers/employee.reducer";
import {selectEmployees} from "../../store/selectors/employee.selectors";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees$: Observable<Employee[]> = this.store.select(selectEmployees);
  constructor(private store: Store<EmployeeState>) { }

  ngOnInit(): void {
  }

}
