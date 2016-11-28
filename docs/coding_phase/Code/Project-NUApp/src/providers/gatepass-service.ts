import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { Gatepass } from '../classes/gatepass';

import { GatepassPreApply } from '../classes/gatepass-pre-apply';
/*
  Generated class for the GatepassService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GatepassService {

  private url: string = 'http://10.0.2.2:8080';
  private body: string;
  constructor(public http: Http) {
    console.log('Hello GatepassService Provider');
  }
/*
  checkUser (email_id: string): Observable<any> {

    let request_url = this.url + '/student';
    console.log('Email id: ', email_id);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    this.body = "email_id=" + email_id;
    return this.http.put(request_url, this.body, options)
                    .map(this.extractData).
                    catch(this.handleError);
  }
*/

/* // Get Student
  loginUser (email_id: string, password: string): Observable<any> {

    let request_url = this.url + '/getAPIKey';
    console.log('password: ', password);

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    this.body = "email_id=" + email_id + "&password=" + password;
    return this.http.post(request_url, this.body, options)
                   .map(this.extractData).
                   catch(this.handleError);
  }
*/

  checkStatus(user_id: string): Observable<any> {
    let request_url = this.url + '/checkStatus';

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });

    this.body = "user_id=" + user_id;
    return this.http.post(request_url, this.body, options)
                    .map(this.extractData).
                    catch(this.handleError);
  }

  getPreApply(user_id: string): Observable<any> {
    let request_url = this.url + '/getPreApply';

    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });

    this.body = "user_id=" + user_id;
    return this.http.post(request_url, this.body, options)
                    .map(this.extractPreApply).
                    catch(this.handleError);
  }

  private extractPreApply(res: Response) {
    let body = res.json();
    console.log("Body here returned:", JSON.stringify(body));
    return body.data as GatepassPreApply || { };
  }

  applyGatepass(gatepass: Gatepass, user_id: string) {
    if (gatepass.gatepass_type == 1) {
      // Local fixed gatepass
      let request_url = this.url + '/applyLocalFixedGatepass';

      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });

      this.body = "user_id=" + user_id;
      return this.http.put(request_url, this.body, options)
        .map(this.extractData).
        catch(this.handleError);
    }

    else if (gatepass.gatepass_type == 2) {
      // Local flexible gatepass
      let request_url = this.url + '/applyLocalFlexibleGatepass';

      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });

      this.body = "user_id=" + user_id +
                  "&purpose=" + gatepass.purpose +
                  "&from_time=" + gatepass.from_time +
                  "&to_time=" + gatepass.to_time +
                  "&send_approval_to=" + gatepass.send_approval_to;

      return this.http.put(request_url, this.body, options)
        .map(this.extractData).
        catch(this.handleError);
    }

    else if (gatepass.gatepass_type == 3) {
      // Outstation gatepass
      let request_url = this.url + '/applyOutstationGatepass';

      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });

      this.body = "user_id=" + user_id +
                  "&purpose=" + gatepass.purpose +
                  "&destination=" + gatepass.destination +
                  "&destination_contact=" + gatepass.destination_contact +
                  "&from_date=" + gatepass.from_date +
                  "&from_time=" + gatepass.from_time +
                  "&to_date=" + gatepass.to_date +
                  "&to_time=" + gatepass.to_time +
                  "&visit_to=" + gatepass.visit_to +
                  "&send_approval_to=" + gatepass.send_approval_to;

      return this.http.put(request_url, this.body, options)
        .map(this.extractData).
        catch(this.handleError);
    }
  }

  private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {

      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);

      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
