import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsAllComponent } from './authors-all.component';

describe('AutorsComponent', () => {
  let component: AuthorsAllComponent;
  let fixture: ComponentFixture<AuthorsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
