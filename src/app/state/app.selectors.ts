import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RaceState } from './app.state';

const getStateFeatureState = createFeatureSelector<RaceState>('races');

export const getRaces = createSelector(
  getStateFeatureState,
  state => state.raceList,
);

export const isLoading = createSelector(
  getStateFeatureState,
  state => state.isLoading,
)
