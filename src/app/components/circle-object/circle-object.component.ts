import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-object',
  templateUrl: './circle-object.component.html',
  styleUrls: ['./circle-object.component.scss']
})
export class CircleObjectComponent implements OnInit {
  @Input('object') object:string;
  constructor() {
    console.log("objOnCircle",this.object)
   }
  ngOnInit(): void {
    console.log("objOnCircle",this.object)
  }

}
