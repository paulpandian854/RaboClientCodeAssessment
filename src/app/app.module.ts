import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppService } from './service/app.service';
import { HttpModule } from '@angular/http';
import { ChuckContanerComponent } from './components/chuckContainer/chuck-container.component'
import { ChuckTableComponent } from './components/chuckTable/chuckTable.component';
import { ChuckFavoritesComponent } from './components/chuckFavoritesTable/chuckFavorites.component';


@NgModule({
  declarations: [
    AppComponent,
    ChuckContanerComponent,
    ChuckTableComponent,
    ChuckFavoritesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
