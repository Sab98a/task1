import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mark=0;

  studentList: any[] = 
[
    {Name:'Ahmed', Email:'Ahmed89@gmail.com',Mark:55},
    {Name:'Bader', Email:'Bader@gmail.com',Mark:30},
    {Name:'Saba', Email:'Saba98@gmail.com',Mark:50},
    {Name:'Zahra', Email:'Zahra@gmail.com',Mark:20},


];

getMarkColor(Mark: number):string
{
  return Mark < 50 ? 'red-text' : 'green-text';
}


   getPassFailStatus(Mark: number):string
   {
    return Mark >= 50 ? 'PASS' : 'FAIL';
   }

   getStyle(): any {

    // Your custom logic to determine the style object
  
    // For example, let's apply a blue background color and white text color:
  
    return {
  
      'background-color': '#fff',
  
      // 'color': 'white',
  
      'padding': '10px',
  
      'text-align': 'center',
  
    };
  
  }
}



