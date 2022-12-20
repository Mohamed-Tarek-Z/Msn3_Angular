import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WznFormComponent } from './wzn-form.component';

describe('WznFormComponent', () => {
  let component: WznFormComponent;
  let fixture: ComponentFixture<WznFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WznFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WznFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
