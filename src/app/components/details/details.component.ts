import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  iddata!:number;
  imag:string="";
  userid!:number;
  useremail!:string;
  FirstName!:string;
  LastName!:string;
constructor(private _ActivatedRoute:ActivatedRoute,private _UserService:UserService,private _HttpClientModule:HttpClientModule){

}

ngOnInit(): void {
  this._ActivatedRoute.params.subscribe((p)=>{
    this.iddata=p['id'];
   });
  this._UserService.getUserDetailas(this.iddata).subscribe({
    next:(responce)=>{
console.log(responce);
this.imag=responce.data.avatar;
this.userid=responce.data.id
this.useremail=responce.data.email
this.FirstName=responce.data.first_name
this.LastName=responce.data.last_name
    }
  })
}



}
