import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOriginUrlComponent } from './get-originUrl.component';

describe('GetOriginUrlComponent', () => {
  let component: GetOriginUrlComponent;
  let fixture: ComponentFixture<GetOriginUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetOriginUrlComponent]
    });
    fixture = TestBed.createComponent(GetOriginUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
