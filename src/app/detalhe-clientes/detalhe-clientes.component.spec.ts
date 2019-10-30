import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheClientesComponent } from './detalhe-clientes.component';

describe('DetalheClientesComponent', () => {
  let component: DetalheClientesComponent;
  let fixture: ComponentFixture<DetalheClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
