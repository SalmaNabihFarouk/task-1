import { Component,OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/shared/user.service';
import { Iuser } from 'src/app/shared/interfaces/iuser';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent implements OnInit {

   
  data:Iuser []=[];
  pageSize:number=0;
  pagenumber:number=0;
  total:number=0;
  term!:number;
  
  constructor(private _HttpClient :HttpClient ,private _UserService:UserService){

  }
  ngOnInit(): void {
    this._UserService.getUserData().subscribe({
      next:(responce)=>{
console.log(responce);

this.data=responce.data;
this.pageSize=responce.per_page;
this.pagenumber=responce.page
this.total=responce.total
      }
    })
  }
  pageChanged(event:any):void{
console.log(event);
this._UserService.getUserData(event).subscribe({
  next:(responce)=>{
console.log(responce);

this.data=responce.data;
this.pageSize=responce.per_page;
this.pagenumber=responce.page
this.total=responce.total
  }
})
  }

}
