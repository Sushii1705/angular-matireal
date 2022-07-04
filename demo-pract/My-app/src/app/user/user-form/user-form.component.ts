import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  checked = false;
  userForm:FormGroup
  constructor(private fb:FormBuilder ,private userservice:UserService) { }

  ngOnInit(): void {
    this.userForm = this.buildform();
  }
  buildform(){
    return this.fb.group({
      name:['', Validators.required],
      age:['', Validators.required],
      email: ['', Validators.required],
      mobileno:['', Validators.required],
      gender:['', Validators.required],
    })
  }
  onSubmit(){
    console.log(this.userForm.value);
    this.userservice.postUserdData(this.userForm.value).subscribe()
  }
}
