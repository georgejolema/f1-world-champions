import { HttpClient } from '@angular/common/http';
import { Injectable, Optional, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DEFAULT_SEASON_LIST, F1_SEASON_LIST_TOKEN } from '../constants';
import { RaceList } from '../model/Races';

@Injectable()
export class RacesService {
  getRaces(season: number): Observable<RaceList> {
    return this.http.get(`/api/f1/${season}/results/1.json`)
      .pipe(map((res: any) => RaceList.toHttpResponse(res.MRData)));
  }

  get seasons(): Array<number> {
    return this.seasonsConfig;
  }

  constructor(
    private http: HttpClient,
    @Optional()
    @Inject(F1_SEASON_LIST_TOKEN)
    private seasonsConfig: Array<number> | undefined,
  ) {
      if (!this.seasonsConfig) {
        this.seasonsConfig = DEFAULT_SEASON_LIST;
      }
  }
}
