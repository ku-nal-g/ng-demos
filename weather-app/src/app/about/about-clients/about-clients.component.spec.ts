import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutClientsComponent } from './about-clients.component';

describe('AboutClientsComponent', () => {
  let component: AboutClientsComponent;
  let fixture: ComponentFixture<AboutClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
