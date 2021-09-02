import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSerComponent } from './list-ser.component';

describe('ListSerComponent', () => {
  let component: ListSerComponent;
  let fixture: ComponentFixture<ListSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
