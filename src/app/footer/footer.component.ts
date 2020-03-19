import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  CourseName: string='';
  courses = ['Angular','Spring','Hibernate','Rest','Soap'];

  
  constructor() { }

  ngOnInit(): void {
  }

}
