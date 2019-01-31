import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PortraitComponent } from './portrait.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PortraitComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PortraitComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'christian-angular-finspace'`, () => {
    const fixture = TestBed.createComponent(PortraitComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('christian-angular-finspace');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(PortraitComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to christian-angular-finspace!');
  });
});
