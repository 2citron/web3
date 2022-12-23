import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauBoxeurComponent } from './nouveau-boxeur.component';

describe('NouveauBoxeurComponent', () => {
  let component: NouveauBoxeurComponent;
  let fixture: ComponentFixture<NouveauBoxeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauBoxeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauBoxeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
