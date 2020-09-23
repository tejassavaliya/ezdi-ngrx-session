import { createFeatureSelector, createSelector } from '@ngrx/store';
import {employeeFeatureKey, EmployeeState} from "../reducers/employee.reducer";


export const selectEmployeeFeatureState = createFeatureSelector<EmployeeState>(
  employeeFeatureKey
);

export const selectEmployees = createSelector(
  selectEmployeeFeatureState,
  (state: EmployeeState) => state.employees
);

export const selectEmployee = createSelector(
  selectEmployeeFeatureState,
  (state: EmployeeState) => state.selectedEmployee
);
