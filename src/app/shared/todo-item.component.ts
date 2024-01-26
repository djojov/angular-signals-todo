import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Todo } from '../core/todo.model';

@Component({
  standalone: true,
  selector: 'todo-item',
  template: `
    <div class="flex items-center">
      <div
        class="border-2 rounded-lg bg-neutral-50 text-gray-900  mt-3  p-5 w-full"
      >
        {{ todo.title }}
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TodoItemComponent {
  @Input({ required: true }) todo!: Todo;
}
