import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoService } from '../core/todos.service';
import TodoItemComponent from '../shared/todo-item.component';

@Component({
  standalone: true,
  selector: 'todo-editor',
  template: `
    <input
      #input
      class="border-2 rounded-lg  mt-3 text-gray-900 p-5 w-full"
      type="text"
      placeholder="Enter a task..."
      (blur)="addTodo()"
    />

    @for (todo of todos(); track $index) {
    <todo-item [todo]="todo" />
    }
  `,
  imports: [TodoItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoEditorComponent {
  @ViewChild('input') inputTodo!: ElementRef;

  private todoService = inject(TodoService);

  todos = toSignal(this.todoService.getTodos());

  addTodo() {
    this.todoService
      .addTodos(this.inputTodo.nativeElement.value)
      .subscribe(() => {
        console.log('Added todo');
      });
  }
}
