import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesRegistradosComponent } from './personajes-registrados.component';

describe('PersonajesRegistradosComponent', () => {
  let component: PersonajesRegistradosComponent;
  let fixture: ComponentFixture<PersonajesRegistradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesRegistradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesRegistradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
