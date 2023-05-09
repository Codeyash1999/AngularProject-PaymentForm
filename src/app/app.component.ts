import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Defining A Variable Name Which We Declare Here To Initialize It
  name = '';

  //Defining A Variable Date Which We Declare Here To Initialize It
  date = '';

  //Defining A Variable Amount Which We Declare Here To Initialize It
  amount : number = 0; //We Can Also Use If We Want To Remove That 0.00 (amount! : number)

  //Declaring Our Own Custom Pipe For That Defining A Variable Over That
  miles! : number;

  // Defining onNameChange Function Which We Add As Event Binding To Input 
  onNameChange(value:string)
  {
    //Updating The Name Property 
    this.name = value;
  }

  //Defining onChangeDate Function Which We Add As Event Binding To Our 2nd Input
  onChangeDate(value : string)
  {
    this.date = value;
  }

  //Defining onChangeAmount Function Which We Add As Event Binding To Our 3rd Input
  onChangeAmount(value:string) // The Value We Received From Input Will Always Be A String
  {
    this.amount = parseFloat(value);//Conversion Of The Value Into Floating Point Number
  }

  //Defining onChangeMiles Function Which We Add As Event Binding To Our 4th Input
  onChangeMiles(value:string)
  {
    this.miles = parseFloat(value);
  }
}