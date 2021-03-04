import { Component, HostListener, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { JOKES } from '../../interfaces/jokes.interface';


@Component({
    selector: 'chuck-table',
    templateUrl: './chuckTable.component.html'
})
export class ChuckTableComponent {
    @Input() jokes: JOKES;
    @Output() checkBoxClickEvent: EventEmitter<string> = new EventEmitter();

    checkBoxClick(value: string): void {   // This Method pushes the selected jokes to a new table

        this.checkBoxClickEvent.emit(value);
    }


}
