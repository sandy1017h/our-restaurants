import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-takeaway',
  templateUrl: './takeaway.component.html',
  styleUrls: ['./takeaway.component.scss']
})
export class TakeawayComponent implements OnInit {


  takeawayy=[
    {},{},{},{},{},{},
    {},{},{},{},{},{},
    {},{},{},{},{},{},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
