import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  ShoppingListComponent,
  // logWith1,
  // logWith2,
} from './shopping-list.component';

describe('logWith', () => {
  beforeEach(() => {
    spyOn(console, 'log');
  });
  // it('logWith1', () => {
  //   logWith1(console.log)('className')('method');
  //   expect(console.log).toHaveBeenCalledWith('className:method');
  // });
  // fit('logWith2', () => {
  //   logWith2(console.log)('className')('method');
  //   expect(console.log).toHaveBeenCalledWith('className:method');
  // });
});
describe('ShoppingListComponent', () => {
  let component: ShoppingListComponent;
  let fixture: ComponentFixture<ShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
