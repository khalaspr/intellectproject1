import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class TodoListServiceService {

  constructor(private _http:Http) { }

 getUsers() {
    return this._http.get("http://jsonplaceholder.typicode.com/users")
    .map((res:Response) => res);
  }

   getTodosByUser(UserId) {
     
    return this._http.get("http://jsonplaceholder.typicode.com/todos?userId="+UserId)
    .map((res:Response) => res);
  }

   deleteTodos(todoId) {
     //alert(todoId)
    return this._http.delete("http://jsonplaceholder.typicode.com/todos/"+todoId)
    .map((res:Response) => res);
  }
}

