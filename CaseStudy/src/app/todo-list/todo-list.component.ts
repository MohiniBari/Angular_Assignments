import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { todos } from 'Modal/todo';
import { TodoserviceService } from '../Service/todoservice.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todolist :any = [];
  status:String | undefined;

  constructor(private empservice:TodoserviceService,private router:Router) { }

  ngOnInit(): void {
    this.empservice.getAlltodos().subscribe(data => this.todolist=data)
  }
  delete(todo:todos){
    //  let obj=this.todolist.findIndex((list: {list id:number;}) => list.id === Todo.id);
    // this.todolist.splice(obj,1)
    this.empservice.deleteTodo(todo.id).subscribe(book =>{
      this.empservice.getAlltodos();
      window.location.reload();
    })
  }

}

