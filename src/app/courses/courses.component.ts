import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @Input('courseName') course: string;
  constructor() { }

  ngOnInit(): void {
  }

}
