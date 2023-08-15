import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mark';
  
    details:string = 'Details';
    studentName:string = '';
  
  
  onStudentNameChange(event:Event): void{
   this.studentName = (event.target as HTMLInputElement).value;
  }
}
