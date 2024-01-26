import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'todo-editor',
  template: `
    <div>
      <input
        class="border-2 rounded-lg  mt-3 text-gray-900 p-5 w-full"
        type="text"
        placeholder="Enter a task..."
      />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoEditorComponent {}
