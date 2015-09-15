/// <reference path="../../../tsd.d.ts" />

import {
  Component, View,
  CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass
} from 'angular2/angular2';

import {handsontable} from '../../../components/index';

// webpack html imports
let template = require('./handsontable-demo.html');

@Component({
  selector: 'handsontable-demo'
})
@View({
  template: template,
  directives: [handsontable, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HandsontableDemo {
  private items:Array<any> = [
    {
      "id": 1,
      "name": {
        "first": "John",
        "last": "Schmidt"
      },
      "address": "45024 France",
      "price": 760.41,
      "isActive": "Yes",
      "product": {
        "description": "Fried Potatoes",
        "options": [
          {
            "description": "Fried Potatoes",
            "image": "//a248.e.akamai.net/assets.github.com/images/icons/emoji/fries.png"
          },
          {
            "description": "Fried Onions",
            "image": "//a248.e.akamai.net/assets.github.com/images/icons/emoji/fries.png"
          }
        ]
      }
    }
  ];
}
