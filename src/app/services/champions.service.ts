import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Driver, RaceList, Constructor } from '../model/Races';


function toHttpResponse({limit, offset, total, RaceTable}): RaceList {
  function buildUser(driver): Driver {
    return {
      code: driver.code,
      dateOfBirth: driver.dateOfBirth,
      id: driver.driverId,
      name: driver.givenName,
      nationality: driver.nationality,
      permanentNumber: driver.permanentNumber,
    };
  }

  function buildContructor(constructor): Constructor {
    return {
      id: constructor.constructorId,
      name: constructor.name,
      nationality: constructor.nationality,
    };
  }
  return {
    limit,
    offset,
    total,
    items: RaceTable.Races.map((race) => ({
      season: race.season,
      round: race.round,
      time: race.time,
      date: race.date,
      result: {
        driver: buildUser(race.Results[0].Driver),
        constructor: buildContructor(race.Results[0].Constructor),
      }
    })),
  };
}

@Injectable()
export class ChampionsService {
  private url = '/api/f1';

  getChampions(year): Observable<RaceList> {
    return this.http.get(`${this.url}/${year}/results/1.json`)
      .pipe(
        map((res: any) => res.MRData),
        map(toHttpResponse));
  }

  constructor(private http: HttpClient) {

  }
}
