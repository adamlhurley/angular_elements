/* tslint:disable: member-ordering */
import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  address = {
    name: '',
    surname: '',
    address1: '',
    address2: '',
    address3: '',
    address4: ''
  };
}
