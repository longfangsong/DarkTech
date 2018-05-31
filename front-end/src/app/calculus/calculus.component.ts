import {Component, OnInit} from '@angular/core';

declare var MathJax: any;

@Component({
  selector: 'app-calculus',
  templateUrl: './calculus.component.html',
  styleUrls: ['./calculus.component.css']
})
export class CalculusComponent implements OnInit {
  formula_diff: String;
  formula_integrate: String;

  constructor() {
  }

  ngOnInit() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }
}
