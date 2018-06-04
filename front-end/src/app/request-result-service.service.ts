import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RequestResultServiceService {
  constructor(
    private http: HttpClient) {
  }

  async fetchResult(operator: String, formula: String) {
    let result = {result: ''} as any;
    // 172.16.169.139:30001
    await this.http.get('http://localhost:8000/' + operator, {
      params: {
        'formula': [formula] as string[]
      }
    }).toPromise().then((response) => {
      result = response;
    }).catch((response) => {
      result = {result: ''};
    });
    return result;
  }
}
