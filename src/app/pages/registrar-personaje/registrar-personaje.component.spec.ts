import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPersonajeComponent } from './registrar-personaje.component';

describe('RegistrarPersonajeComponent', () => {
  let component: RegistrarPersonajeComponent;
  let fixture: ComponentFixture<RegistrarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPersonajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
