import { createReducer, on } from '@ngrx/store';
import { RaceList } from '../model/Races';
import * as RaceActions from './app.actions';

export interface RaceState {
  isLoading: boolean;
  raceList: RaceList;
  error: string;
  selectedYear: number;
}

const initialState: RaceState = {
  isLoading: true,
  selectedYear: 2005,
  raceList: {
    items: [],
    limit: 0,
    offset: 0,
    total: 0,
  },
  error: '',
};

export const racesReducer = createReducer<RaceState>(
  initialState,
  on(RaceActions.loadRacesSuccess, (state, action): RaceState => {
    return {
      ...state,
      error: '',
      raceList: action.raceList,
      isLoading: false,
    };
  }),
  on(RaceActions.setLoadingIndicator, (state, action) => {
    return {
      ...state,
      isLoading: action.isLoading,
    };
  }),
  on(RaceActions.loadRacesError, (state, action) => {
    return {
      ...state,
      raceList: {
        items: [],
        limit: 0,
        offset: 0,
        total: 0,
      },
      error: action.error,
      isLoading: false,
    };
  }),
);
