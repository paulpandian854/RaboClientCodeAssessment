import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './service/app.service';
import { TITLE } from '../contants';
import { JOKES } from './interfaces/jokes.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = TITLE;
  jokes: JOKES[];
  interval: any;
  jokesSelected: string[];


  constructor(private appService: AppService) {
  }

  ngOnInit() {
     const localStorageValue = localStorage.getItem('jokes');
     const parsedValue = (localStorageValue !== '') ? JSON.parse(localStorageValue) : '';
     if (parsedValue !== '') this.jokesSelected = parsedValue;
    
    try {
      this.appService.getChuckJokes().subscribe(response => {
        if (response._body) {
          var json = JSON.parse(response._body);
          this.jokes = json.value;
        }
      })
    }
    catch (error) {
      console.log(error)
    }
  }

}
