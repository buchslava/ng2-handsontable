/// <reference path="../../tsd.d.ts" />

import {
  Component, View,
  Directive, LifecycleEvent,
  EventEmitter, ElementRef,
  CORE_DIRECTIVES, NgClass
} from 'angular2/angular2';

declare var Handsontable:any;

@Directive({
  selector: 'hot-table',
  properties: [
    'dataRows:datarows',
    'width',
    'height'
  ],
  lifecycle: [LifecycleEvent.onInit, LifecycleEvent.onDestroy]
})
export class HotTable {
  private dataRows:Array<any>;
  private width:number;
  private height:number;
  private view:any;

  constructor(private element:ElementRef) {
  }

  onInit() {

    console.log(this.dataRows);


    this.view = document.createElement('div');
    this.view.class = 'handsontable-container handsontable htColumnHeaders';
    // this.view.innerHTML = 'foo';
    this.element.nativeElement.appendChild(this.view);
  }

  onDestroy() {
    if (this.view) {
      this.view.remove();
    }
  }
}

export const handsontable:Array<any> = [HotTable];
