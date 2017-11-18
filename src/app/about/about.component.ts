/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { TodoListServiceService } from '../todo-list-service.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
    styleUrls: ['about.component.scss'],
    templateUrl: './about.component.html',
    providers:[TodoListServiceService]
})
export class AboutComponent {
    open: Boolean = false;
 UserId:string;
 profile:any;
UserName:String;
  constructor(private route:ActivatedRoute,private router:Router,private _TodoListServiceService:TodoListServiceService) {
this.UserId = this.route.snapshot.params['UserId'];   
this.UserName = this.route.snapshot.params['UserName'];

    }

ChangeTodoList(ChangeTodoList,event){

//alert(ChangeTodoList+" "+event)

} 
backToList(){
             this.router.navigate(['/home']);

}

DeleteTodos(todoId){

//alert(todoId)
    this._TodoListServiceService.deleteTodos(todoId)
                               .map(response => response.json())
                               .subscribe((res) =>{
                                                     console.log(res);                                   
                               })
                            

this.getTodoByUser();
}

 ngOnInit(){
  
   this.getTodoByUser();
                            
 }

 getTodoByUser(){
      this._TodoListServiceService.getTodosByUser(this.UserId)
                               .map(response => response.json())
                               .subscribe((res) =>{
                                                     this.profile=res;                  
                                                     console.log(this.profile);                                   
                               })
 }
}
