import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RaceList } from '../model/Races';

@Injectable()
export class RacesService {
  getRaces(season: number): Observable<RaceList> {
    return this.http.get(`/api/f1/${season}/results/1.json`)
      .pipe(map((res: any) => RaceList.toHttpResponse(res.MRData)));
  }

  constructor(private http: HttpClient) {}
}
