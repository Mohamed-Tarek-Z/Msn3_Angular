import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WznComponent } from './wzn.component';

describe('WznComponent', () => {
  let component: WznComponent;
  let fixture: ComponentFixture<WznComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WznComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WznComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
