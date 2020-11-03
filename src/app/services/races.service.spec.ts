import { HttpClient } from '@angular/common/http';
import { RacesService } from './races.service';
import { of } from 'rxjs';

describe('RacesService', () => {
  let service: RacesService;
  let httpClientStub: any;
  beforeEach(() => {
    httpClientStub = {
      get: jasmine.createSpy().and.returnValue(of({
        MRData: {
          xmlns: 'http://ergast.com/mrd/1.4',
          series: 'f1',
          url: 'http://ergast.com/api/f1/2015/results/1.json',
          limit: '30',
          offset: '0',
          total: '19',
          RaceTable: {
            season: '2015',
            position: '1',
            Races: [{
              season: '2015',
              round: '1',
              url: 'http://en.wikipedia.org/wiki/2015_Australian_Grand_Prix',
              raceName: 'Australian Grand Prix',
              Circuit: {
                circuitId: 'albert_park',
                url: 'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit',
                circuitName: 'Albert Park Grand Prix Circuit',
                Location: {
                  lat: '-37.8497',
                  long: '144.968',
                  locality: 'Melbourne',
                  country: 'Australia'
                }
              },
              date: '2015-03-15',
              time: '05:00:00Z',
              Results: [
                {
                  number: '44',
                  position: '1',
                  positionText: '1',
                  points: '25',
                  Driver: {
                    driverId: 'hamilton',
                    permanentNumber: '44',
                    code: 'HAM',
                    url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
                    givenName: 'Lewis',
                    familyName: 'Hamilton',
                    dateOfBirth: '1985-01-07',
                    nationality: 'British'
                  },
                  Constructor: {
                    constructorId: 'mercedes',
                    url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
                    name: 'Mercedes',
                    nationality: 'German'
                  },
                  grid: '1',
                  laps: '58',
                  status: 'Finished',
                  Time: { millis: '5514067', time: '1:31:54.067' },
                  FastestLap: {
                    rank: '1',
                    lap: '50',
                    Time: { time: '1:30.945' },
                    AverageSpeed: { units: 'kph', speed: '209.915' }
                  }
                }
              ]
            }]
          }
        }
      }))
    };

    service = new RacesService(httpClientStub);
  });

  it('#getRaces should call with the right api endpoint', () => {
    service.getRaces(100);
    expect(httpClientStub.get).toHaveBeenCalledWith('/api/f1/100/results/1.json');
  });

  it('#getRaces should transform the response', (done) => {
    const result = service.getRaces(100);

    const response = {
      limit: 30,
      offset: 0,
      total: 19,
      items: [
        {
          season: 2015,
          round: 1,
          time: '05:00:00Z',
          date: '2015-03-15',
          name: 'Australian Grand Prix',
          winner: {
            driver: {
              code: 'HAM',
              dateOfBirth: '1985-01-07',
              id: 'hamilton',
              name: 'Lewis Hamilton',
              nationality: 'British',
              permanentNumber: 44
            },
            constructor: {
              id: 'mercedes',
              name: 'Mercedes',
              nationality: 'German'
            },
            laps: 58,
            number: 44,
            points: 25,
            time: '1:31:54.067'
          },
          country: 'Australia',
          locality: 'Melbourne',
          webReference: {
            circuit: 'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit',
            race: 'http://en.wikipedia.org/wiki/2015_Australian_Grand_Prix',
            winnerConstructor: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
            winnerDriver: 'http://en.wikipedia.org/wiki/Lewis_Hamilton'
          }
        }
      ]
    };

    result.subscribe((data) => {
      expect(data).toEqual(response);
      done();
    });
  });
});
