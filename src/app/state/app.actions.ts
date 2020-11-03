import { createAction, props } from '@ngrx/store';
import { RaceList } from '../model/Races';

export const loadRaces = createAction(
  '[Races] Load',
  props<{ selectedYear: number }>()
);

export const setLoadingIndicator = createAction(
  '[Races] set loading indicator',
  props<{ isLoading: boolean }>()
);

export const loadRacesSuccess = createAction(
  '[Races] Load success',
  props<{ raceList: RaceList }>()
);

export const loadRacesError = createAction(
  '[Races] Load error',
  props<{ error: string }>()
);
