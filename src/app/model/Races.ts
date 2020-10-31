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
  result: Result;
}

export interface RaceList {
  items: Array<Race>;
  offset: number;
  limit: number;
  total: number;
}
