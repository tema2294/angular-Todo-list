import { Component } from '@angular/core';

export class Todo {
  name: string;
  isCompleted: boolean;
  id: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos: Todo[] = [];
  newTodo: string;

  saveTodo () {
    if (this.newTodo) {
      let todo = new Todo()
      todo.isCompleted = true
      todo.id = `${new Date()}`
      todo.name = this.newTodo
      this.todos.push(todo)
      this.newTodo = ''
    } else {
      alert('please enter todo')
    }
  }
  deleteItem (deletedId: string) {
      this.todos = this.todos.filter(({id})=> id !== deletedId)
  }
}
