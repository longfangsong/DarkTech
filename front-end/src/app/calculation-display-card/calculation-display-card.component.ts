import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {RequestResultServiceService} from "../request-result-service.service";

declare var MathJax: any;

@Component({
  selector: 'app-calculation-display-card',
  templateUrl: './calculation-display-card.component.html',
  styleUrls: ['./calculation-display-card.component.css']
})
export class CalculationDisplayCardComponent implements OnInit {
  @Input() card_name: String;
  @Input() data_url: String;
  formula: String;
  @ViewChild('result') result: ElementRef;

  constructor(private service: RequestResultServiceService) {
  }

  ngOnInit() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }

  do_calculate() {
    this.service.fetchResult(this.data_url, this.formula).then((result) => {
      let the_element = this.result.nativeElement;
      the_element.innerHTML = '$$ ' + result.result + ' $$';
      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    })
  }
}
