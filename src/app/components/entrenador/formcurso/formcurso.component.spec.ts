import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcursoComponent } from './formcurso.component';

describe('FormcursoComponent', () => {
  let component: FormcursoComponent;
  let fixture: ComponentFixture<FormcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
