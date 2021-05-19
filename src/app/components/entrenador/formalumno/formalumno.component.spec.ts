import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalumnoComponent } from './formalumno.component';

describe('FormalumnoComponent', () => {
  let component: FormalumnoComponent;
  let fixture: ComponentFixture<FormalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormalumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
