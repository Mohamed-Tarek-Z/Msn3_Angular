import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EznComponent } from './ezn.component';

describe('EznComponent', () => {
  let component: EznComponent;
  let fixture: ComponentFixture<EznComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EznComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EznComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
