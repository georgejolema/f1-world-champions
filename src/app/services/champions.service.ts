import { HttpClient } from '@angular/common/http';
import { Injectable, Optional, Inject, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DEFAULT_SEASON_LIST, F1_SEASON_LIST_TOKEN } from '../constants';
import { RaceList } from '../model/Races';

@Injectable()
export class ChampionsService implements OnDestroy {
  private store: BehaviorSubject<number>;

  public champions: Observable<RaceList>;

  private getChampions(season: number): Observable<RaceList> {
    return this.http.get(`/api/f1/${season}/results/1.json`)
      .pipe(map((res: any) => RaceList.toHttpResponse(res.MRData)));
  }

  selectYear(season: number): void {
    this.store.next(season);
  }

  get seasons(): Array<number> {
    return this.seasonsConfig;
  }

  ngOnDestroy(): void {
    this.store.complete();
  }

  constructor(
    private http: HttpClient,
    @Optional()
    @Inject(F1_SEASON_LIST_TOKEN)
    private seasonsConfig: Array<number> | undefined
    ) {
      if (!this.seasonsConfig) {
        this.seasonsConfig = DEFAULT_SEASON_LIST;
      }

      this.store = new BehaviorSubject<number>(this.seasonsConfig[0]);

      this.champions = this.store.pipe(switchMap((year: number) => this.getChampions(year)));
    }
}
