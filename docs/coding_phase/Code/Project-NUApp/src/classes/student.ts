import { Gatepass } from './gatepass';
import { GatepassService } from '../providers/gatepass-service';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

export class Student {
  // TODO make everything except api key private.
  public name: string;
  public enrollment_no: string;
  public email_id: string;

  constructor(name, enrollment_no, email_id) {
    this.name = name;
    this.enrollment_no = enrollment_no;
    this.email_id = email_id;
  }
}
