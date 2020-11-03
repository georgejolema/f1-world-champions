import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RaceList } from '../model/Races';
import { ChampionsService } from '../services/champions.service';
import { getRaces, isLoading } from '../state/app.selectors';
import { RaceState } from '../state/app.state';
import * as RaceActions from '../state/app.actions';

@Component({
  selector: 'f1-root',
  templateUrl: './f1.component.html',
  styleUrls: ['./f1.component.scss'],
})
export class AppComponent implements OnInit{
  data: Observable<RaceList>;
  seasons: Array<number>;
  isLoading: Observable<boolean>;

  selectSeason(season: number): void {
    this.store.dispatch(RaceActions.setLoadingIndicator({isLoading: true}));
    this.store.dispatch(RaceActions.loadRaces({selectedYear: season}));
  }

  ngOnInit() {
    this.selectSeason(this.seasons[0]);
  }

  constructor(private api: ChampionsService, private store: Store<RaceState>) {
    this.data = this.store.select(getRaces);
    this.isLoading = this.store.select(isLoading);
    this.seasons = this.api.seasons;
  }
}
