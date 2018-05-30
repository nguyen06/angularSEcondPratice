import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDemoInjectorComponent } from './user-demo-injector.component';

describe('UserDemoInjectorComponent', () => {
  let component: UserDemoInjectorComponent;
  let fixture: ComponentFixture<UserDemoInjectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDemoInjectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDemoInjectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
