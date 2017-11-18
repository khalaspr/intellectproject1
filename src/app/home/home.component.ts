import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoListServiceService } from '../todo-list-service.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent {
 profile: any;
 stackBadges:any;

    constructor(private router: Router,private _TodoListServiceService:TodoListServiceService) {
        
    }


    ViewTodos(UserId,UserName){

       // alert('view todo'+UserId);
         this.router.navigate(['/about/',{ UserId: UserId, 'UserName':UserName }]);

    }

    ngOnInit(){

 this._TodoListServiceService.getUsers()
                               .map(response => response.json())
                               .subscribe((res) =>{
                                                     this.profile=res;                  
                                                   //  console.log(this.profile);                                   
                               })

    }
}
