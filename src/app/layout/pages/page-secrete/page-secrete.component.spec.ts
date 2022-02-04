import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSecreteComponent } from './page-secrete.component';

describe('PageSecreteComponent', () => {
  let component: PageSecreteComponent;
  let fixture: ComponentFixture<PageSecreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSecreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSecreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
