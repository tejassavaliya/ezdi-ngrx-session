import { Action, createReducer, on } from '@ngrx/store';
import {Employee} from "../../models/employee";
import * as EmployeeActions from '../actions/employee.actions';

export const employeeFeatureKey = 'employeeState';

export interface EmployeeState {
  employees: Employee[];
  selectedEmployee: Employee;
  error: any;
}

export const initialState: EmployeeState = {
  employees: undefined,
  selectedEmployee: undefined,
  error: undefined
};


export const reducer = createReducer(
  initialState,
  on(EmployeeActions.loadEmployeesSuccess, (state, action) => {
    return {
      ...state,
      employees: action.employees
    };
  }),
  on(EmployeeActions.loadEmployeesFailure, (state, action) => {
    return {
      ...state,
      error: action.error
    };
  }),
  on(EmployeeActions.loadEmployeeSuccess, (state, action) => {
    return {
      ...state,
      selectedEmployee: action.selectedEmployee
    };
  }),
);

