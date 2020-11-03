import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { RaceComponent } from './f1.race.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, By } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Race, Result } from '../model/Races';

@Component({
  selector: 'f1-flag',
  template: '<div></div>',
})
class FakeFlagComponent {
  @Input() nationality = '';
}

@Component({
  selector: 'f1-result',
  template: '<div></div>',
})
class FakeResultComponent {
  @Input() result: Result;
}

describe('RaceComponent', () => {
  let fixture: ComponentFixture<RaceComponent>;
  let component: RaceComponent;

  const race: Race = {
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
        permanentNumber: 44,
      },
      constructor: {
        id: 'mercedes',
        name: 'Mercedes',
        nationality: 'German',
      },
      laps: 58,
      number: 44,
      points: 25,
      time: '1:31:54.067',
    },
    country: 'Australia',
    locality: 'Melbourne',
    webReference: {
      circuit: 'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit',
      race: 'http://en.wikipedia.org/wiki/2015_Australian_Grand_Prix',
      winnerConstructor:
        'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
      winnerDriver: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, NgbModule, FontAwesomeModule],
      declarations: [RaceComponent, FakeFlagComponent, FakeResultComponent],
    });

    fixture = TestBed.createComponent(RaceComponent);
    component = fixture.componentInstance;

    component.race = race;
    fixture.detectChanges();
  });

  it('should display nationality', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-race__property'));
    expect(result[0].nativeElement.innerText).toBe('Australia');
  });

  it('should display locality', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-race__property'));
    expect(result[1].nativeElement.innerText).toBe('Melbourne');
  });

  it('should display date', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-race__property'));
    expect(result[2].nativeElement.innerText).toBe('2015-03-15');
  });

  it('should display round', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-race__property'));
    expect(result[3].nativeElement.innerText).toBe('1');
  });

  it('should display the winner name', () => {
    const result = fixture.debugElement.query(
      By.css('.f1-race__winner-button')
    );
    expect(result.nativeElement.innerText).toBe('Lewis Hamilton');
  });

  it('should display the winner name', () => {
    const result = fixture.debugElement.query(By.css('.f1-race__title'));
    expect(result.nativeElement.innerText).toBe('Australian Grand Prix');
  });

  it('should display the reference of the race', () => {
    const result = fixture.debugElement.queryAll(By.css('a'));
    expect(result[0].nativeElement.href).toBe(
      'http://en.wikipedia.org/wiki/2015_Australian_Grand_Prix'
    );
  });

  it('should display the reference of the circuit', () => {
    const result = fixture.debugElement.queryAll(By.css('a'));
    expect(result[1].nativeElement.href).toBe(
      'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit'
    );
  });

  it('should display the reference of the constructor', () => {
    const result = fixture.debugElement.queryAll(By.css('a'));
    expect(result[3].nativeElement.href).toBe(
      'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One'
    );
  });

  it('should display the reference of the driver', () => {
    const result = fixture.debugElement.queryAll(By.css('a'));
    expect(result[2].nativeElement.href).toBe(
      'http://en.wikipedia.org/wiki/Lewis_Hamilton'
    );
  });

  it('should set isDisplayed to false if the button is pressed', () => {
    const button = fixture.debugElement.query(
      By.css('.f1-race__winner-button')
    );
    button.nativeElement.click();

    expect(component.isDisplayed).toBe(false);
  });
});
