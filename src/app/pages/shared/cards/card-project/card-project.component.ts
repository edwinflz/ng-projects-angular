import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from '@core/entities/portfolio.interface';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProjectComponent {

  @Input() project: Project;
  constructor() {}
}
