import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPrincipalComponent } from './titulo-principal.component';

describe('TituloPrincipalComponent', () => {
  let component: TituloPrincipalComponent;
  let fixture: ComponentFixture<TituloPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
