import { Component, OnInit, Input } from '@angular/core';

import { RecentDetectionResponseObject } from '../../model/recent-detection-response-object';


@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {
  @Input()
  currentDataSet:RecentDetectionResponseObject;
  constructor() { }

  ngOnInit() {
  }

}
