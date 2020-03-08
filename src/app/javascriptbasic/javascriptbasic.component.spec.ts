import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptbasicComponent } from './javascriptbasic.component';

describe('JavascriptbasicComponent', () => {
  let component: JavascriptbasicComponent;
  let fixture: ComponentFixture<JavascriptbasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptbasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
