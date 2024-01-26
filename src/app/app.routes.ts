import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'todo-editor',
    loadComponent: () =>
      import('./features/todo-editor.component').then(
        (m) => m.TodoEditorComponent
      ),
  },
  {
    path: '',
    redirectTo: 'todo-editor',
    pathMatch: 'full',
  },
];
