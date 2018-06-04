import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RequestResultServiceService} from "../request-result-service.service";

declare var MathJax: any;

@Component({
  selector: 'app-calculus',
  templateUrl: './calculus.component.html',
  styleUrls: ['./calculus.component.css']
})
export class CalculusComponent implements OnInit {
  formula_diff: String;
  formula_integrate: String;
  @ViewChild('diff_result') diff_output: ElementRef;
  @ViewChild('integrate_result') integrate_output: ElementRef;

  constructor(private service: RequestResultServiceService) {
  }

  ngOnInit() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }

  do_diff() {
    this.service.fetchResult('basic_math/diff', this.formula_diff).then((result) => {
      let the_element = this.diff_output.nativeElement;
      the_element.innerHTML = '$$ ' + result.result + ' $$';
      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    })
  }

  do_integrate() {
    this.service.fetchResult('basic_math/integrate', this.formula_integrate).then((result) => {
      let the_element = this.integrate_output.nativeElement;
      the_element.innerHTML = '$$ ' + result.result + ' $$';
      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    })
  }

}
