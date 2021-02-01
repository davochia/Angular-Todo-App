import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from 'src/app/models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  
  
  //todosUrl:string = 'https://jsonplaceholder.typicode.com/todos';

  todosUrl:string = 'http://localhost:9000/todos';

  constructor(private http: HttpClient) { }

// Add Todo
  addTodo(todo:Todo):Observable<Todo> {
    console.log(todo);
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
    
  }

  // Get todos
  getTodos():Observable<Todo[]>{
    //console.log(this.todosUrl);
    return this.http.get<Todo[]>(this.todosUrl);
  }

  // Completed toggle
  toggleCompleted(todo: Todo):Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  // Delete
  deleteTodo(todo: Todo):Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

}
