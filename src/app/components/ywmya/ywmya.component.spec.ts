import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YwmyaComponent } from './ywmya.component';

describe('YwmyaComponent', () => {
  let component: YwmyaComponent;
  let fixture: ComponentFixture<YwmyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YwmyaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YwmyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
