import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CreateFormComponent } from './containers/create-form/create-form.component';

@Component({
  selector: 'app-create-form-page',
  standalone: true,
  imports: [CreateFormComponent],
  template: `
    <h2>フォーム新規作成</h2>
    <app-create-form></app-create-form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateFormPageComponent {}
