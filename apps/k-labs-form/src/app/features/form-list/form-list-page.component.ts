import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-list-page',
  standalone: true,
  imports: [],
  template: `
    <p>
      form-list-page works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormListPageComponent {

}
