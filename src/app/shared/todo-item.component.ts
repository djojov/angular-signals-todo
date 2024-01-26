import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '../core/todo.model';

@Component({
  standalone: true,
  selector: 'todo-item',
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TodoItemComponent {
  @Input({ required: true }) todo!: Todo;
}
