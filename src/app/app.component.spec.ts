import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MVPComponentComponent } from './mvpcomponent/mvpcomponent.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CraneWareAssessmentApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CraneWareAssessmentApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('CraneWareAssessmentApp app is running!');
  });


  //UNIT TEST for MVPComponentComponent
  it('should render the MVPComponent', () => {
    const fixture = TestBed.createComponent(MVPComponentComponent);
    fixture.detectChanges();
    const mvpComponent = fixture.componentInstance;
    expect(mvpComponent).toBeTruthy();
  })

});
