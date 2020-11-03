import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultComponent } from './f1.result.component';
import { By } from '@angular/platform-browser';

describe('ResultComponent', () => {
  let fixture: ComponentFixture<ResultComponent>;
  let component: ResultComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ResultComponent]
    });

    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;

    component.result = {
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
    };

    fixture.detectChanges();
  });

  it('should show the nationality', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-result__property'));
    expect(result[0].nativeElement.innerText).toBe('British');
  });

  it('should show the date of birth', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-result__property'));
    expect(result[1].nativeElement.innerText).toBe('1985-01-07');
  });

  it('should show the number', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-result__property'));
    expect(result[2].nativeElement.innerText).toBe('44');
  });

  it('should show the code', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-result__property'));
    expect(result[3].nativeElement.innerText).toBe('HAM');
  });

  it('should show the constructor name', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-result__property'));
    expect(result[4].nativeElement.innerText).toBe('Mercedes');
  });

  it('should show the laps', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-result__property'));
    expect(result[5].nativeElement.innerText).toBe('58');
  });

  it('should show the time', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-result__property'));
    expect(result[6].nativeElement.innerText).toBe('1:31:54.067');
  });

  it('should show the points', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-result__property'));
    expect(result[7].nativeElement.innerText).toBe('25');
  });

  it('should show only 8 fields in total', () => {
    const result = fixture.debugElement.queryAll(By.css('.f1-result__property'));
    expect(result.length).toBe(8);
  });
});
