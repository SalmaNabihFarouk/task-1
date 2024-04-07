import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from './interfaces/iuser';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient:HttpClient ) { 




  }


  
getUserData(pagenumber:number=1):Observable<any>
{
 return this._HttpClient.get(`https://reqres.in/api/users?page=${pagenumber}`);
}
  
getUserDetailas(id:number):Observable<any>{
  return this._HttpClient.get(`https://reqres.in/api/users?id=${id}`);
}


}
