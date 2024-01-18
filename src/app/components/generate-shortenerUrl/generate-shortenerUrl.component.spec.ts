import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateShortenerUrlComponent } from './generate-shortenerUrl.component';

describe('GenerateShortenerUrlComponent', () => {
  let component: GenerateShortenerUrlComponent;
  let fixture: ComponentFixture<GenerateShortenerUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateShortenerUrlComponent]
    });
    fixture = TestBed.createComponent(GenerateShortenerUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
