import {Component, Input, Output, EventEmitter, OnInit} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'sort-buttons',
    template: `
        <a *ngIf="descOrder" (click)="ascendingOrderClicked()">
            <span class="glyphicon glyphicon-sort-by-attributes"></span>
        </a>
        <a *ngIf="ascOrder" (click)="descendingOrderClicked()">
            <span class="glyphicon glyphicon-sort-by-attributes-alt"></span>
        </a>
    `
})
export class SortButtonsComponent implements OnInit {

    ascOrder:boolean;
    descOrder:boolean;

    @Input()
    sortProperty:string;

    @Input()
    initialOrderAsc:boolean;

    @Output()
    ascendingOrder = new EventEmitter();

    @Output()
    descendingOrder = new EventEmitter();

    ngOnInit() {
        this.initialOrderAsc ? this.ascendingOrderClicked() : this.descendingOrderClicked();
    }

    ascendingOrderClicked() {
        this.ascendingOrder.emit(this.sortProperty);
        this.ascOrder = true;
        this.descOrder = !this.ascOrder;
    }

    descendingOrderClicked() {
        this.descendingOrder.emit(this.sortProperty);
        this.descOrder = true;
        this.ascOrder = !this.descendingOrder;
    }

}
