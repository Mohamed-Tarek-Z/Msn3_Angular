import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WznTableComponent } from './wzn-table.component';

describe('WznTableComponent', () => {
  let component: WznTableComponent;
  let fixture: ComponentFixture<WznTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WznTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WznTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
