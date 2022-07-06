import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AdmissionDetails } from 'src/app/admission/models/admission.model';
import { AdmissionService } from 'src/app/admission/services/admission.service';

@Component({
  selector: 'app-confirmation-overlay',
  templateUrl: './confirmation-overlay.component.html',
  styleUrls: ['./confirmation-overlay.component.scss']
})
export class ConfirmationOverlayComponent implements OnInit {

  constructor(private router:Router,@Inject(MAT_DIALOG_DATA) public data: AdmissionDetails) { 

  }
  displayedColumns: string[] = ['name', 'mobileno', 'email', 'dob','gender','address','action','bloodgroup','subject'];

  ngOnInit(): void {
    
console.log('xugvxugu',this.data);

  }
proceed(){
  this.router.navigateByUrl('/admission/list')
}
close(){}
}

