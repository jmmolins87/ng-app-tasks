import { Component, OnInit } from '@angular/core';
import { Task } from './models/task.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public listTasks: Task [] = [];
  public nameTask: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  getCapitalizeFirstLetter( text: string ) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  addTask() {
    
    // Ponemos el texto capitalizado
    this.getCapitalizeFirstLetter( this.nameTask );

    // Crear objeto tarea
    const TASK: Task = {
      name: this.nameTask,
      state: false
    }

    // Agregar objeto tarea al array
    this.listTasks.push( TASK );

    // Resetear input
    this.nameTask = '';
  }

  deleteItem( index: number ): void {
    this.listTasks.splice( index, 1 );
  }

  updateTask( task: Task, index: number ): void {
    this.listTasks[ index ].state = !task.state;
  }

}
