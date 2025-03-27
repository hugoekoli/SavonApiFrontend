import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyComponentCssComponent } from './privacy-policy.component.css.component';

describe('PrivacyPolicyComponentCssComponent', () => {
  let component: PrivacyPolicyComponentCssComponent;
  let fixture: ComponentFixture<PrivacyPolicyComponentCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivacyPolicyComponentCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacyPolicyComponentCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
