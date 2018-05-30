import {Component, Input, OnInit} from '@angular/core';
import {BasicMathService} from "./basic-math.service";

declare var MathJax: any;

@Component({
  selector: 'app-basic-math',
  templateUrl: './basic-math.component.html',
  styleUrls: ['./basic-math.component.css']
})

export class BasicMathComponent implements OnInit {
  @Input() formula: String;
  result: String;

  constructor(private service: BasicMathService) {
  }

  ngOnInit() {
    // MathJax.Hub.Process();
    // MathJax.Hub.Queue(["Process"]);
    // MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax('math')[0], '']);
  }

  do_calculate() {
    this.service.fetchResult(this.formula).then((result) => {
      MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax('math')[0], result.result]);
    })
  }
}
