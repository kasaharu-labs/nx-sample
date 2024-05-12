import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LyCreateFormComponent } from '../../views/ly-create-form/ly-create-form.component';

@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [LyCreateFormComponent],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateFormComponent {}
