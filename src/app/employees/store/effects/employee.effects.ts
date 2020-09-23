import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {EmployeeService} from "../../services/employee.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {EMPTY, of} from "rxjs";
import * as EmployeeActions from '../actions/employee.actions';


@Injectable()
export class EmployeeEffects {

  loadEmployees$ = createEffect(() => this.actions$.pipe(
    ofType(EmployeeActions.loadEmployees),
    mergeMap(() => this.employeeService.getEmployees()
      .pipe(
        map(employees => (EmployeeActions.loadEmployeesSuccess({ employees }))),
        catchError((error) => of(EmployeeActions.loadEmployeesFailure({ error })))
      ))
    )
  );

  loadEmployee$ = createEffect(() => this.actions$.pipe(
    ofType(EmployeeActions.loadEmployee),
    mergeMap((action) => this.employeeService.getEmployee(action.id)
      .pipe(
        map(employee => (EmployeeActions.loadEmployeeSuccess({ selectedEmployee: employee }))),
        catchError((error) => of(EmployeeActions.loadEmployeeFailure({ error })))
      ))
    )
  );

  constructor(private actions$: Actions,
              private employeeService: EmployeeService) {}

}

