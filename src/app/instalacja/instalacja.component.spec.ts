import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacjaComponent } from './instalacja.component';

describe('InstalacjaComponent', () => {
  let component: InstalacjaComponent;
  let fixture: ComponentFixture<InstalacjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
