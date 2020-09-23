import { createAction, props } from '@ngrx/store';
import {Employee} from '../../models/employee';

export const loadEmployees = createAction(
  '[Employee] Load Employees'
);

export const loadEmployeesSuccess = createAction(
  '[Employee] Load Employees Success',
  props<{ employees: Employee[] }>()
);

export const loadEmployeesFailure = createAction(
  '[Employee] Load Employees Failure',
  props<{ error: any }>()
);


export const loadEmployee = createAction(
  '[Employee] Load Employee',
  props<{id: string}>()
);

export const loadEmployeeSuccess = createAction(
  '[Employee] Load Employee Success',
  props<{ selectedEmployee: Employee }>()
);

export const loadEmployeeFailure = createAction(
  '[Employee] Load Employee Failure',
  props<{ error: any }>()
);
