import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { UserList } from './model/user-model';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
public userdata:FormGroup
public userdata$:Observable<UserList[]>;
  constructor(private userservice:UserService) { 
    this.userdata$ = new Observable();
  }

  ngOnInit(): void {
   this.userdata$ = this.userservice.getuserdata()

  }
  delete(id: number) {
    this.userservice.deleteData(id).subscribe((res: UserList) => {
      console.log(res);
      alert('lol')
    });
    this.userdata$ = this.userservice.getuserdata();
  }

}
