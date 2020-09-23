import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddEditComponent } from './components/employee-add-edit/employee-add-edit.component';
import { StoreModule } from '@ngrx/store';
import * as fromEmployee from './store/reducers/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/effects/employee.effects';


@NgModule({
  declarations: [EmployeesComponent, EmployeeListComponent, EmployeeAddEditComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    StoreModule.forFeature(fromEmployee.employeeFeatureKey, fromEmployee.reducer),
    EffectsModule.forFeature([EmployeeEffects])
  ]
})
export class EmployeesModule { }
