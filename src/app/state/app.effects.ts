import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { RacesService } from '../services/races.service';
import * as RaceActions from './app.actions';

@Injectable()
export class RacesEffects {
  constructor(private actions: Actions, private racesService: RacesService) {}

  loadRaces = createEffect(() => {
    return this.actions
      .pipe(
        ofType(RaceActions.loadRaces),
        mergeMap((action) => this.racesService.getRaces(action.selectedYear)
          .pipe(
            map((raceList) => RaceActions.loadRacesSuccess({ raceList })),
            catchError(() => of(RaceActions.loadRacesError({error: 'Internal error'})))
          ),
      ));
  });
}
