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
}

export interface Race {
  season: number;
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

    return {
      limit: +limit,
      offset: +offset,
      total: +total,
      items: RaceTable.Races.map((race: any) => ({
        season: +race.season,
        round: +race.round,
        time: race.time,
        date: race.date,
        name: race.raceName,
        winner: {
          driver: buildUser(race.Results[0].Driver),
          constructor: buildContructor(race.Results[0].Constructor),
        }
      })),
    };
  }
}
