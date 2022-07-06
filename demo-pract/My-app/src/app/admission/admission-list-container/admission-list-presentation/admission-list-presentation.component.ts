import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission-list-presentation',
  templateUrl: './admission-list-presentation.component.html',
  styleUrls: ['./admission-list-presentation.component.scss']
})
export class AdmissionListPresentationComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['name', 'age', 'email', 'mobileno','gender','skills','action'];

  ngOnInit(): void {
  }

}
