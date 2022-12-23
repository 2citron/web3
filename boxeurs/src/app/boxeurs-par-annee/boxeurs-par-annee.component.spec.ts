import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxeursParAnneeComponent } from './boxeurs-par-annee.component';

describe('BoxeursParAnneeComponent', () => {
  let component: BoxeursParAnneeComponent;
  let fixture: ComponentFixture<BoxeursParAnneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxeursParAnneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxeursParAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
