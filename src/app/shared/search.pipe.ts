import { Pipe, PipeTransform } from '@angular/core';
import { Iuser } from './interfaces/iuser';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data:Iuser[],userid:number ):Iuser[]{
    if(!data||!userid){
return data;
    }
    return  data.filter((item)=> item.id==userid) ;
    // return  data.filter((item)=> item.first_name.toLowerCase().includes(userid.toLowerCase())) ;
  }

}
