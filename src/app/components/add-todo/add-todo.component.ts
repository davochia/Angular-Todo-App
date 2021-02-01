import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  description:string;
  endDate:Date;

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      title: this.title,
      description: this.description,
      endDate: this.endDate,
      completed: false
    }
    this.addTodo.emit(todo);
  }

}
