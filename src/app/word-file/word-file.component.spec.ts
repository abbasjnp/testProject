import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFileComponent } from './word-file.component';

describe('WordFileComponent', () => {
  let component: WordFileComponent;
  let fixture: ComponentFixture<WordFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
