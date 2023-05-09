import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits : string): any {
    if(!value)
    {
      return '';
    }
    
    // Using A Switch Statement To Convert The Target Units Into Km OR m OR cm
    switch(targetUnits)
    {
      //In Case Of KM
      case 'km' : 
      {
      return value * 1.60934;
      }

      //In Case Of M
      case 'm' :
      {
      return  (value * 1.60934) * 1000;
      }

      //In Case Of CM
      case 'cm' : 
      {
        return (value * 1.60934 * 1000 * 1000);
      }

      default : 
      {
        throw new Error(`Unit Does Not Exist In The Parameter`)
        
      }
    }
    
  }

}
