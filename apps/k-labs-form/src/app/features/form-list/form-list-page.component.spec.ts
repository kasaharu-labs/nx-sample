import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { appRoutes } from '../../app.routes';
import FormListPageComponent from './form-list-page.component';

describe('FormListPageComponent', () => {
  let harness: RouterTestingHarness;
  let component: FormListPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormListPageComponent],
      providers: [provideRouter(appRoutes)],
    }).compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('', FormListPageComponent);

    harness.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
