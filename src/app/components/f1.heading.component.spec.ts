import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HeadingComponent } from './f1.heading.component';
import { Store } from '@ngrx/store';
import { F1_SEASON_LIST_TOKEN } from '../constants';
import { loadRaces } from '../state/app.actions';

describe('HeadingComponent', () => {
  let fixture: ComponentFixture<HeadingComponent>;
  let component: HeadingComponent;
  let storeStub: any;
  beforeEach(() => {
    storeStub = {
      dispatch: jasmine.createSpy(),
    };

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeadingComponent],
      providers: [
        {
          provide: Store,
          useValue: storeStub,
        },
        {
          provide: F1_SEASON_LIST_TOKEN,
          useValue: [2001, 2002, 2003],
        },
      ],
    });

    fixture = TestBed.createComponent(HeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should send the first season automatically to the dispatcher', () => {
    expect(storeStub.dispatch).toHaveBeenCalledWith(
      loadRaces({ selectedYear: 2001 })
    );
  });

  it('should send the selected season to the dispatcher', () => {
    component.model.season = 2002;
    component.onSelectSeason();

    expect(storeStub.dispatch).toHaveBeenCalledWith(
      loadRaces({ selectedYear: 2002 })
    );
  });
});
