import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderGlobalComponent } from './loader-global.component';

describe('LoaderGlobalComponent', () => {
  let component: LoaderGlobalComponent;
  let fixture: ComponentFixture<LoaderGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaderGlobalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
