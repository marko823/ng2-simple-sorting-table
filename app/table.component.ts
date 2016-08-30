import {Component} from '@angular/core';
import {EMPLOYEES} from "./data";
import {SORT_BUTTONS_COMPONENTS} from "./sort-buttons-components";
import {SORT_BUTTONS_PROVIDERS} from "./sort-buttons-providers";
import {SortingService} from "./sorting.service";

@Component({
    selector: 'simple-table',
    template: `

    <table class="table table-striped">
    <thead>
      <tr>
        <th>Full name
            <sort-buttons
                        [sortProperty]="'fullName'"
                        [initialOrderAsc]="false"
                        (ascendingOrder)="ascSort(data, $event)"
                        (descendingOrder)="descSort(data, $event)">
            </sort-buttons>
        </th>
        <th>Email
            <sort-buttons
                        [sortProperty]="'email'"
                        [initialOrderAsc]="false"
                        (ascendingOrder)="ascSort(data, $event)"
                        (descendingOrder)="descSort(data, $event)">
            </sort-buttons>
        </th>
        <th>Date of Birth
            <sort-buttons
                        [sortProperty]="'birthDate'"
                        [initialOrderAsc]="false"
                        (ascendingOrder)="ascSort(data, $event)"
                        (descendingOrder)="descSort(data, $event)">
            </sort-buttons>
        </th>
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

    `,
    providers: [SortingService],
    directives: [SORT_BUTTONS_COMPONENTS]
})
export class TableComponent {

    data:Array<any>;

    constructor(private sortingService:SortingService) {
        this.data = EMPLOYEES;
    }

    ascSort(data:Array<any>, event:any) {
        this.data = this.sortingService.sort(data, event, "asc");
    }

    descSort(data:Array<any>, event:any) {
        this.data = this.sortingService.sort(data, event, "desc");
    }

}

