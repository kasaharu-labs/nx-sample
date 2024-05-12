import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyCreateFormComponent } from './ly-create-form.component';

describe('LyCreateFormComponent', () => {
  let component: LyCreateFormComponent;
  let fixture: ComponentFixture<LyCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyCreateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LyCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
