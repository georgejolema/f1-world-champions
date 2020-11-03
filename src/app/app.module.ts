import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/f1.component';
import { FormsModule } from '@angular/forms';
import { RacesService } from './services/races.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlagComponent } from './components/f1.flag.component';
import { StoreModule } from '@ngrx/store';
import { HeadingComponent } from './components/f1.heading.component';
import { RaceComponent } from './components/f1.race.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ResultComponent } from './components/f1.result.component';
import { EffectsModule } from '@ngrx/effects';
import { racesReducer } from './state/app.state';
import { RacesEffects } from './state/app.effects';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FlagComponent,
    HeadingComponent,
    RaceComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    StoreModule.forRoot({ races: racesReducer }),
    FontAwesomeModule,
    EffectsModule.forRoot([RacesEffects]),
  ],
  providers: [RacesService, ...environment.mocks],
  bootstrap: [AppComponent],
})
export class AppModule {}
