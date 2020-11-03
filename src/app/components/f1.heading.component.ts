import { Component, Inject, OnInit, Optional } from '@angular/core';
import { Store } from '@ngrx/store';
import { RaceState } from '../state/app.state';
import * as RaceActions from '../state/app.actions';
import { DEFAULT_SEASON_LIST, F1_SEASON_LIST_TOKEN } from '../constants';

@Component({
  selector: 'f1-heading',
  templateUrl: 'f1.heading.component.html',
})
export class HeadingComponent implements OnInit {
  model: { [key: string]: number } = {};

  onSelectSeason(): void {
    this.store.dispatch(RaceActions.setLoadingIndicator({ isLoading: true }));
    this.store.dispatch(
      RaceActions.loadRaces({ selectedYear: this.model.season })
    );
  }

  ngOnInit(): void {
    this.model = { season: this.seasons[0] };
    this.onSelectSeason();
  }

  constructor(
    private store: Store<RaceState>,
    @Optional()
    @Inject(F1_SEASON_LIST_TOKEN)
    public seasons: Array<number> | undefined
  ) {
    if (!this.seasons) {
      this.seasons = DEFAULT_SEASON_LIST;
    }
  }
}
