import { Component, HostListener, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { JOKES } from '../../interfaces/jokes.interface';


@Component({
    selector: 'chuck-favorites',
    templateUrl: './chuckFavorites.component.html'
})
export class ChuckFavoritesComponent {
    @Input() jokesSelected: JOKES;
    @Output() removeFromFavoritesEvent: EventEmitter<string> = new EventEmitter();

    removeFromFavorites(value: string): void {   // This Method pushes the selected jokes to a new table

        this.removeFromFavoritesEvent.emit(value);
    }


}
