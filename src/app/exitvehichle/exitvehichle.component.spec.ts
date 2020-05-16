import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitvehichleComponent } from './exitvehichle.component';

describe('ExitvehichleComponent', () => {
  let component: ExitvehichleComponent;
  let fixture: ComponentFixture<ExitvehichleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitvehichleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitvehichleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
