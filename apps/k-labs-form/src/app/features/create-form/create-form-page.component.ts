import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create-form-page',
  standalone: true,
  imports: [],
  template: `<p>create-form-page works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateFormPageComponent {}
