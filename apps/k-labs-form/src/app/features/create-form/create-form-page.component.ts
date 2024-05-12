import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create-form-page',
  standalone: true,
  imports: [],
  template: `
    <h2>フォーム新規作成</h2>
    <p>create-form-page works!</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateFormPageComponent {}
