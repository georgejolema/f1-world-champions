export interface Driver {
  code: string;
  dateOfBirth: string;
  id: string;
  name: string;
  nationality: string;
  permanentNumber: number;
}

export interface Constructor {
  id: string;
  name: string;
  nationality: string;
}

export interface Result {
  driver: Driver;
  constructor: Constructor;
  laps: number;
  number: number;
  points: number;
  time: string;
}

export interface Race {
  season: number;
  country: string;
  locality: string;
  round: number;
  time: string;
  date: string;
  name: string;
  winner: Result;
}

export interface RaceList {
  items: Array<Race>;
  offset: number;
  limit: number;
  total: number;
}

export class RaceList {
  static toHttpResponse({limit, offset, total, RaceTable}): RaceList {
    const buildUser = (driver: any): Driver => {
      return {
        code: driver.code,
        dateOfBirth: driver.dateOfBirth,
        id: driver.driverId,
        name: driver.givenName + ' ' + driver.familyName,
        nationality: driver.nationality,
        permanentNumber: +driver.permanentNumber,
      };
    };

    const buildContructor = (constructor: any): Constructor => {
      return {
        id: constructor.constructorId,
        name: constructor.name,
        nationality: constructor.nationality,
      };
    };

    const buildResult = (result: any): Result => {
      return {
        driver: buildUser(result.Driver),
        constructor: buildContructor(result.Constructor),
        laps: +result.laps,
        number: +result.number,
        points: +result.points,
        time: result.Time.time,
      };
    };

    const buildRace = (race): Race => {
      return {
        season: +race.season,
        round: +race.round,
        time: race.time,
        date: race.date,
        name: race.raceName,
        winner: buildResult(race.Results[0]),
        country: race.Circuit.Location.country,
        locality: race.Circuit.Location.locality,
      };
    };

    return {
      limit: +limit,
      offset: +offset,
      total: +total,
      items: RaceTable.Races.map(buildRace),
    };
  }
}
