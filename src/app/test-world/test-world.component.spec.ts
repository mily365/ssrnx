import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWorldComponent } from './test-world.component';

describe('TestWorldComponent', () => {
  let component: TestWorldComponent;
  let fixture: ComponentFixture<TestWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
