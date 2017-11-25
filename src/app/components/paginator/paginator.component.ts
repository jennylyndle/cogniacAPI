import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input()
  length:number;
  @Input()
  pageSize:number;
  @Input()
  pageSizeOptions:Array<number>;

  @Input()
  pageIndex:number;

  @Output()
  pageEvent = new EventEmitter<PageEvent>();
  

  constructor() { }

  ngOnInit() {
  }
  

  paginate($event){
    this.pageEvent.emit($event);
  }

  // MatPaginator Output


}
