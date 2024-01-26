import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

const BE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private httpClient = inject(HttpClient);

  public getTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${BE_URL}/todos`);
  }

  public addTodos(title: string): Observable<Todo> {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    return this.httpClient.post<Todo>(`${BE_URL}/todos`, newTodo);
  }
}
