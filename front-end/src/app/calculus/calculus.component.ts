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
    // MathJax.Hub.Rerender();
    // MathJax.Hub.Queue(["Process"]);
    // MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax('math-diff')[0], '']);
    // MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax('math-integrate')[0], '']);
  }
}
