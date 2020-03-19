import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpruebaComponent } from './mainprueba.component';

describe('MainpruebaComponent', () => {
  let component: MainpruebaComponent;
  let fixture: ComponentFixture<MainpruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
