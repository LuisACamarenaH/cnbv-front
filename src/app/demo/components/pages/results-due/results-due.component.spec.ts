import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsDueComponent } from './results-due.component';

describe('ResultsDueComponent', () => {
  let component: ResultsDueComponent;
  let fixture: ComponentFixture<ResultsDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsDueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
