import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoChoComponent } from './calculo-cho.component';

describe('CalculoChoComponent', () => {
  let component: CalculoChoComponent;
  let fixture: ComponentFixture<CalculoChoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoChoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculoChoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
