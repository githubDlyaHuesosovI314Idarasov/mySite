import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwtichLanguage } from './swtich-language';

describe('SwtichLanguage', () => {
  let component: SwtichLanguage;
  let fixture: ComponentFixture<SwtichLanguage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwtichLanguage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwtichLanguage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
