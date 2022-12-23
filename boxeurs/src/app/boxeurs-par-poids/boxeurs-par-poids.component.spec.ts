import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxeursParPoidsComponent } from './boxeurs-par-poids.component';

describe('BoxeursParPoidsComponent', () => {
  let component: BoxeursParPoidsComponent;
  let fixture: ComponentFixture<BoxeursParPoidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxeursParPoidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxeursParPoidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
