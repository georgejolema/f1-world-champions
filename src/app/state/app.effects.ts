import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ChampionsService } from '../services/champions.service';
import * as RaceActions from './app.actions';

@Injectable()
export class RacesEffects {
  constructor(private actions: Actions, private racesService: ChampionsService) {}

  loadRaces = createEffect(() => {
    return this.actions
      .pipe(
        ofType(RaceActions.loadRaces),
        mergeMap((action) => this.racesService.getRaces(action.selectedYear)
          .pipe(map((raceList) => RaceActions.loadRacesSuccess({ raceList })))
      ));
  });
}