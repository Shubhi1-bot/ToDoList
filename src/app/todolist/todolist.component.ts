import { Component, OnInit } from '@angular/core';

import { NgDragDropModule } from 'ng-drag-drop';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

import { DragulaModule, DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {


  tasks : string[] = [];
  task = '';
  completedTask : string[] = [];
  droppedItems : string[] = [];

 addTask(){
   let todo = this.task;
   if(this.task == ''){
    
   }
   else{
     this.tasks.push(todo);
     this.task = '';
   }
 }
 deleteTask(index:any){
   console.log(index)
   this.tasks.splice(index, 1);
 }


 taskCompleted(index: any){
   let comp = this.tasks[index];
   this.completedTask.push(comp);
   console.log(comp);
   
   this.tasks.splice(index, 1);
  }
 
  ngOnInit(): void {
  }
  
   constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup("SPILL", {
      removeOnSpill: true
    });
  }
}
 


// drop(event: any): void { if (event.previousContainer === event.container) 
//   { moveItemInArray(event.tasks.task, event.previousIndex, event.currentIndex); } 
//   else { transferArrayItem(event.previousContainer.data, event.container.data, 
//     event.previousIndex, event.currentIndex); } }
// }
