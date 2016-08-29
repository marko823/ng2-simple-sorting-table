import {Component} from '@angular/core';
import {EMPLOYEES} from "./data";

@Component({
    selector: 'simple-table',
    template: `

    <table class="table table-striped">
    <thead>
      <tr>
        <th>Full name</th>
        <th>Email</th>
        <th>Date of Birth</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let employee of data;">
        <td>{{employee.fullName}}</td>
        <td>{{employee.email}}</td>
        <td>{{employee.birthDate | date}}</td>
      </tr>
    </tbody>
  </table>

    `
})
export class TableComponent {

    data:Array<any>;

    constructor() {
        this.data = EMPLOYEES;
    }

}

