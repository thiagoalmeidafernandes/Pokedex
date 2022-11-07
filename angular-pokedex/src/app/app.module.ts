import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
