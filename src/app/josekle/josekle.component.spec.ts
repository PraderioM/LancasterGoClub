import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { JosekleComponent } from './josekle.component';

describe('JosekleComponent', () => {
  let component: JosekleComponent;
  let fixture: ComponentFixture<JosekleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JosekleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JosekleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
