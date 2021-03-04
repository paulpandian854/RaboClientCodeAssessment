import { Component, Input, HostListener} from "@angular/core";
import { JOKES } from "../../interfaces/jokes.interface";



@Component({
    selector: 'chuck-container',
    templateUrl: './chuck-container.component.html',
    styleUrls: ['./chuck-container.component.css']
})
export class ChuckContanerComponent {
    @Input() jokes: JOKES[] = [];
    @Input() title: string;
    @Input() jokesSelected: string[] = [];
    interval: any;
    
    constructor(){

    }
    autoPopulateFavorites(): void {
        this.jokesSelected = []; // Clearing out favorites everytime when the button is click
        this.jokes.forEach(f => {    // new age for loop
            this.jokesSelected.push(f.joke);
        })
    }

    timeAddFavorites(): void {   //   Loading all the jokes to jokes selected container at a time limit of 10 seconds
        this.interval = setInterval(() => {
            this.jokes.forEach(f => {
                let index = this.jokesSelected.indexOf(f.joke);
                if (index === -1) {
                    this.jokesSelected.push(f.joke);
                }
            });
            if (this.jokesSelected.length === 10) {
                clearInterval(this.interval);
            }
        }, 5000)
    }

    checkBoxClick(value: string): void {   // This Method pushes the selected jokes to a new table
        let index = this.jokesSelected.indexOf(value);
        if (index === -1) {
            this.jokesSelected.push(value);
        }
    }

    removePopulateFavorites(): void {
        this.jokesSelected = [];
    }

    stopAutoPopulate(): void {  //Stop the Interval Timer
        clearInterval(this.interval);
    }

    removeFromFavorites(value: string) {   // remove the selected value from the favorite list
        let index = this.jokesSelected.indexOf(value);
        this.jokesSelected.splice(index, 1);
    }

  @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    if (this.jokesSelected.length > 0) {
        localStorage.setItem('jokes', JSON.stringify(this.jokesSelected));
      } else {
         localStorage.setItem('jokes', '');
      }
}
}