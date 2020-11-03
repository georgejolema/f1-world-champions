import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlagComponent } from './f1.flag.component';

describe('FlagComponent', () => {
  let component: FlagComponent;
  let fixture: ComponentFixture<FlagComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [FlagComponent]
    });

    fixture = TestBed.createComponent(FlagComponent);
    component = fixture.componentInstance;


  });

  it('should create the flag url if the nationality is valid', () => {
    component.nationality = 'German';
    fixture.detectChanges();

    const result = component.flagUrl;
    expect(result).toBe('https://cdn.ipregistry.co/flags/emojitwo/de.svg')
  });

  it('should return undefined if the nationality is invalid', () => {
    component.nationality = 'invalid';
    fixture.detectChanges();

    const result = component.flagUrl;
    expect(result).toBeUndefined();
  });
});
