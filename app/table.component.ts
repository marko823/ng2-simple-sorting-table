import {Component, ViewChildren} from "@angular/core";
import {QueryList} from "@angular/core/src/linker/query_list";
import {EMPLOYEES} from "./data";
import {SortingService} from "./sorting.service";
import {SortButtonsComponent} from "./sort-buttons.component";

@Component({
    selector: 'simple-table',
    template: `

    <table class="table table-striped">
    <thead>
      <tr>
        <th>Full name
            <sort-buttons
                        [sortProperty]="'fullName'"
                        (ascendingOrder)="ascSort(data, $event)"
                        (descendingOrder)="descSort(data, $event)">
            </sort-buttons>
        </th>
        <th>Email
            <sort-buttons
                        [sortProperty]="'email'"
                        (ascendingOrder)="ascSort(data, $event)"
                        (descendingOrder)="descSort(data, $event)">
            </sort-buttons>
        </th>
        <th>Date of Birth
            <sort-buttons
                        [sortProperty]="'birthDate'"
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
    directives: [SortButtonsComponent]
})
export class TableComponent {

    data:Array<any>;

    @ViewChildren(SortButtonsComponent) items:QueryList<SortButtonsComponent>;

    constructor(private sortingService:SortingService) {
        this.data = EMPLOYEES;
    }

    ascSort(data:Array<any>, sortProperty:any) {
        this.data = this.sortingService.sort(data, sortProperty, "asc");
        this.changeChildrenState(sortProperty);
    }

    descSort(data:Array<any>, sortProperty:any) {
        this.data = this.sortingService.sort(data, sortProperty, "desc");
        this.changeChildrenState(sortProperty);
    }

    changeChildrenState(sortProperty:any) {

        this.items.forEach((item) => {
            if (!(item.sortProperty === sortProperty)) {
                item.state.changeState(false, false, true);
            }
        })

    }

}

