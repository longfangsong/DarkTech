import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicMathService {

  constructor(
    private http: HttpClient) {
  }

  async fetchResult(formula: String) {
    let result;
    await this.http.get('http://localhost:8000/basic_math/simplify', {
      params: {
        'formula': [formula] as string[]
      }
    }).toPromise().then((response) => {
      result = response;
    }).catch((response) => {
      result = {result: ''}
    });
    return result;
  }
}
