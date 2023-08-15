import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  details:string = 'Details';
  studentName:string = '';


onStudentNameChange(event:Event): void{
 this.studentName = (event.target as HTMLInputElement).value;
}
}
