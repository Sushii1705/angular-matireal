import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserList } from '../model/user-model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  @Input() public set userdata(value: UserList[] | null){
    if (value) {
      console.log('lol',value);
      this._userdata = value;
    }
  }
  public get userdata(): UserList[] | null {
    return this._userdata;
  }
  @Output() public delete: EventEmitter<number>;

  private _userdata : UserList[]
  constructor(private userservice:UserService) {
    this.delete = new EventEmitter();
   }
  displayedColumns: string[] = ['name', 'age', 'email', 'mobileno','gender','action'];
 
  ngOnInit(): void {  
  }
  
  onDelete(id:number){
    console.log(id);  
    this.delete.emit(id);
  }

}
