import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudproComponent } from './crudpro.component';

describe('CrudproComponent', () => {
  let component: CrudproComponent;
  let fixture: ComponentFixture<CrudproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrudproComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrudproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
