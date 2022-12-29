import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.scss']
})
export class DiningComponent implements OnInit {
   
  dining=[
    {},{},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
