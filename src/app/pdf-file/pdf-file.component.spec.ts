import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFileComponent } from './pdf-file.component';

describe('PdfFileComponent', () => {
  let component: PdfFileComponent;
  let fixture: ComponentFixture<PdfFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
