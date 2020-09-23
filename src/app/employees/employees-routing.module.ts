import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {EmployeeAddEditComponent} from "./components/employee-add-edit/employee-add-edit.component";

const routes: Routes = [
    {
      path: '',
      component: EmployeesComponent,
      children: [
        { path: '', redirectTo: 'list'},
        { path: 'list', component: EmployeeListComponent },
        { path: 'create', component: EmployeeAddEditComponent },
        { path: 'update/:id', component: EmployeeAddEditComponent }
      ]
    },
    { path: '**', component: EmployeeListComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
