import { Component } from '@angular/core';
import { employees } from './employees';
import { Employee } from './model/Employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyTestingApp...!';
  emps: Employee[] = employees;
}
