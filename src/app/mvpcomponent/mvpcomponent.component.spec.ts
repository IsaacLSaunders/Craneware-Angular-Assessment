import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MVPComponentComponent } from './mvpcomponent.component';

describe('MVPComponentComponent', () => {
  let component: MVPComponentComponent;
  let fixture: ComponentFixture<MVPComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MVPComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MVPComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
