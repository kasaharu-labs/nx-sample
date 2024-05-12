import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form-list-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>フォーム一覧</h2>
    <a routerLink="/forms/new">フォームを新規作成</a>
    <p>form-list-page works!</p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormListPageComponent {}
