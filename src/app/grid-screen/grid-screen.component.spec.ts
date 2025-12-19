import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridScreenComponent } from './grid-screen.component';

describe('GridScreenComponent', () => {
  let component: GridScreenComponent;
  let fixture: ComponentFixture<GridScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridScreenComponent]
    });
    fixture = TestBed.createComponent(GridScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
