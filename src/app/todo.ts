import { Time } from "@angular/common"

export class todo{
    sno: number = 0
    title: string = ""
    desc: string = ""
    active: boolean = false
    taskTime: Time = {hours:0, minutes:0};

    // constructor(){
    //     this.sno = 0;
    // }
}