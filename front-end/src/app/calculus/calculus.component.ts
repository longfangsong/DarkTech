import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RequestResultServiceService} from "../request-result-service.service";

declare var MathJax: any;

@Component({
  selector: 'app-calculus',
  templateUrl: './calculus.component.html',
  styleUrls: ['./calculus.component.css']
})
export class CalculusComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
