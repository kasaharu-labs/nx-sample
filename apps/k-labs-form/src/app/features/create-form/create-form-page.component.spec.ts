import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { appRoutes } from '../../app.routes';
import CreateFormPageComponent from './create-form-page.component';

describe('CreateFormPageComponent', () => {
  let harness: RouterTestingHarness;
  let component: CreateFormPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFormPageComponent],
      providers: [provideRouter(appRoutes)],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl(
      'forms/new',
      CreateFormPageComponent
    );

    harness.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
