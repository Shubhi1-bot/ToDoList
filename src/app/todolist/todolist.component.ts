import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NgDragDropModule } from 'ng-drag-drop';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

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
    // console.log("Add task first");
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
//  onItemDrop(e: any) {
//   // Get the dropped data here
//   this.droppedItems.push(e.dragData);
//   if (e.dragData.type === 'task') {
//     this.removeTask(e.dragData, this.tasks);
//   }
//   else {
//     this.removeTask(e.dragData, this.tasks);
//   }
// }

 taskCompleted(index: any){
   let comp = this.tasks[index];
   this.completedTask.push(comp);
   console.log(comp);
   
   this.tasks.splice(index, 1);
 }
  constructor() { }

  ngOnInit(): void {
  }
  

  // removeTask(item: any, list: Array<any>) {
  //   let index = list.map(function (e) {
  //     return e.name
  //   }).indexOf(item.name);
  //   list.splice(index, 1);
  // }
//   drop(event: CdkDragDrop<string[]>) {
//     moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
//   }
//   isDragDrop(object: any): object is CdkDragDrop<string[]> {
//   return 'previousIndex' in object;
// }


drop(event: any): void { if (event.previousContainer === event.container) 
  { moveItemInArray(event.tasks.task, event.previousIndex, event.currentIndex); } 
  else { transferArrayItem(event.previousContainer.data, event.container.data, 
    event.previousIndex, event.currentIndex); } }
}
