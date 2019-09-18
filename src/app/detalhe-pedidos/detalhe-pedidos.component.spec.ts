import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePedidosComponent } from './detalhe-pedidos.component';

describe('DetalhePedidosComponent', () => {
  let component: DetalhePedidosComponent;
  let fixture: ComponentFixture<DetalhePedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhePedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
