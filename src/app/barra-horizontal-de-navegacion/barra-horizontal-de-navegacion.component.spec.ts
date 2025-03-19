import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraHorizontalDeNavegacionComponent } from './barra-horizontal-de-navegacion.component';

describe('BarraHorizontalDeNavegacionComponent', () => {
  let component: BarraHorizontalDeNavegacionComponent;
  let fixture: ComponentFixture<BarraHorizontalDeNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraHorizontalDeNavegacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraHorizontalDeNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
