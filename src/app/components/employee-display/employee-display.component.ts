import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/Employee.model';


@Component({
  selector: 'app-employee-display',
  templateUrl: './employee-display.component.html',
  styleUrls: ['./employee-display.component.css']
})
export class EmployeeDisplayComponent implements OnInit {
  @Input() empProp: Employee;

  constructor() { }

  ngOnInit(): void {
  }

}
