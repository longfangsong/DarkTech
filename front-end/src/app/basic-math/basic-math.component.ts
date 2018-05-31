import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BasicMathService} from "./basic-math.service";

declare var MathJax: any;

@Component({
  selector: 'app-basic-math',
  templateUrl: './basic-math.component.html',
  styleUrls: ['./basic-math.component.css']
})

export class BasicMathComponent implements OnInit {
  @Input() formula: String;
  @ViewChild('math') math_output: ElementRef;

  constructor(private service: BasicMathService) {
  }

  ngOnInit() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }

  do_calculate() {
    this.service.fetchResult(this.formula).then((result) => {
      let the_element = this.math_output.nativeElement;
      the_element.innerHTML = '$$ ' + result.result + ' $$';
      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    })
  }
}
