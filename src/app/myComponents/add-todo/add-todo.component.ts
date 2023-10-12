import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { todo } from 'src/app/todo';
import { Time } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
    title: string="";
    desc: string="";
    taskTime: Time= {hours:0, minutes:0};

    @Output() todoAddX: EventEmitter<todo> = new EventEmitter;
    
    onSubmit(){
      const todoF ={
        sno:0,
        title: this.title,
        desc: this.desc,
        taskTime: this.taskTime,
        active: true
      }

      this.todoAddX.emit(todoF);

      this.title="";
      this.desc="";
      this.taskTime= {hours:0, minutes:0};
    }

    setAlarm(title:string, taskTime:Time){
        console.log(title);
        console.log(taskTime);
        
        let x = taskTime.toString();
        console.log(x);
    
        var d = new Date();
        const h = d.getHours();
        const m = d.getMinutes();
        const now = (h * 60 + m) * 60 * 1000;

        const alarmTimeMillis = this.convertTimeToms(x);
        console.log(alarmTimeMillis);

        const delayMillis = Math.max(0, alarmTimeMillis - now);
        console.log(delayMillis);

        setTimeout(() => {
          console.log('Alarm triggered for', this.taskTime);
          this.playAlarmSound();
        }, delayMillis);
      }

      convertTimeToms(s:string){ 
        const timeParts: string[] = s.split(":");

        const hrs: string = timeParts[0];
        const mins: string = timeParts[1];

        const h: number = parseInt(hrs, 10);
        const m: number = parseInt(mins, 10);

        const millis = (h * 60 + m) * 60 * 1000;
        
        return millis;
      }
    
      playAlarmSound(): void {
        const audio = new Audio('assets/alarm.mp3'); 
        audio.play();
      }
    }
   



