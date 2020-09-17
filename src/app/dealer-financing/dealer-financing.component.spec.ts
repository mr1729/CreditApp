import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerFinancingComponent } from './dealer-financing.component';

describe('DealerFinancingComponent', () => {
  let component: DealerFinancingComponent;
  let fixture: ComponentFixture<DealerFinancingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerFinancingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
