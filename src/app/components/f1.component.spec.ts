import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './f1.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let storeStub: any;

  beforeEach(() => {
    storeStub = {
      select: jasmine.createSpy().and.returnValues(of({}), of({})),
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent
      ],
      providers: [{
        provide: Store,
        useValue: storeStub,
      }],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should load the component correctly', () => {
    expect(component).not.toBeUndefined();
  });
});
