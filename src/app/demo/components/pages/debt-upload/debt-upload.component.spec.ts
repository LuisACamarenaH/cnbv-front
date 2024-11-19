import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtUploadComponent } from './debt-upload.component';

describe('DebtUploadComponent', () => {
  let component: DebtUploadComponent;
  let fixture: ComponentFixture<DebtUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebtUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebtUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
