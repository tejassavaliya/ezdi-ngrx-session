import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Employee} from "../../models/employee";
import {selectEmployee, selectEmployees} from "../../store/selectors/employee.selectors";
import {select, Store} from "@ngrx/store";
import {EmployeeState} from "../../store/reducers/employee.reducer";
import {ActivatedRoute, Router} from "@angular/router";
import * as EmployeeActions from '../../store/actions/employee.actions';
@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})
export class EmployeeAddEditComponent implements OnInit {
  employees$: Observable<Employee[]> = this.store.select(selectEmployees);
  selectedEmployee$: Observable<Employee>;

  constructor(private store: Store<EmployeeState>,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.store.dispatch(EmployeeActions.loadEmployee({id}));
    }

    this.selectedEmployee$ = this.store.pipe(select(selectEmployee));
    this.selectedEmployee$.subscribe((emp) => {
      console.log(emp)
    })


  }

}
