import {Component} from '@angular/core';
import {TableComponent} from "./table.component";

@Component({
    selector: 'simple-sorting-table-demo',
    // template: '<h1>Simple sorting table demo</h1>',
    template: `
        <h1>Simple sorting table demo</h1>
        <simple-table></simple-table>
    `,
    directives: [TableComponent]
})
export class SimpleSortingTableDemoComponent {
}

