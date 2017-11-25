import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { RecentDetectionResponseObject } from '../../model/recent-detection-response-object';
import { Detection } from '../../model/detection';
import { RecentDetectionParams } from '../../model/recent-detection-params';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  detectionResponseObjects:Array<RecentDetectionResponseObject>;
  currentDataSet:Array<RecentDetectionResponseObject>;
  next:string='';
  error:any=null;
  pageIndex:number = 0;
  total:number = 100;
  pageSize:number = 10;
  pageSizeOptions:Array<number> = [5, 10, 25, 100];
  appNameMap = {
    'dog_7fp':'Dog',
    'cat_9iq':'Cat'
  }
  constructor( private apiService:ApiService) { }

  ngOnInit() {
    this.getRecentDetections();
  }

  getRecentDetections(params?:RecentDetectionParams){
    this.apiService.getRecentDetections('',params).subscribe((res)=>{
      this.error = null;
      this.detectionResponseObjects = res.data;
      this.next = res.paging.next;
      this.detectionResponseObjects = this.detectionResponseObjects.map((obj:RecentDetectionResponseObject)=>{
          obj.detections[0].desc_name = this.appNameMap[obj.detections[0].subject_uid];
          obj.detections[0].desc_probability = (obj.detections[0].uncal_prob*100).toFixed(2);
          return obj;
      });
      this.pageIndex = 0;
      this.total = this.detectionResponseObjects.length;
      //If while loading intially, check if we need to fetch next page.
      if(((this.pageIndex*this.pageSize)+this.pageSize)>=this.total && this.next!=undefined)
      {
         this.fetchNextDetections();
      }
      this.updateDataSet();
    },(err)=>{this.error = err});
  }

  updateDataSet(){
    let start = (this.pageIndex*this.pageSize);
    let end = start+this.pageSize;
    this.currentDataSet = this.detectionResponseObjects.slice(start, end);
  }

  paginateGrid($event){
   if((($event.pageIndex*$event.pageSize)+$event.pageSize)>=$event.length && this.next!=undefined)
   {
      this.fetchNextDetections();
   }
   //else{
    this.pageIndex = $event.pageIndex;
    this.pageSize = $event.pageSize;
    this.updateDataSet();
   //}
    
  }

  fetchNextDetections(params?:RecentDetectionParams){
    this.apiService.getRecentDetections(this.next,params).subscribe((res)=>{
      this.error = null;
      this.detectionResponseObjects = this.detectionResponseObjects.concat(res.data);
      this.next = res.paging.next;
      this.detectionResponseObjects = this.detectionResponseObjects.map((obj:RecentDetectionResponseObject)=>{
          obj.detections[0].desc_name = this.appNameMap[obj.detections[0].subject_uid];
          obj.detections[0].desc_probability = (obj.detections[0].uncal_prob*100).toFixed(2);
          return obj;
      });
      //this.pageIndex++;
      this.total = this.detectionResponseObjects.length;
      this.updateDataSet();
    },(err)=>{this.error = err});
  }

  filter($event){
    var params = new RecentDetectionParams();
    if($event.minProb!=undefined&&$event.minProb!=null&&$event.minProb!=='')
      params.probability_lower = $event.minProb;
    if($event.maxProb!=undefined&&$event.maxProb!=null&&$event.maxProb!=='')
      params.probability_upper = $event.maxProb;
    if($event.startDate!=null)
      params.start = $event.startDate;
    if($event.endDate!=null)
      params.end = $event.endDate;
    if ($event.reverse != null)
      params.reverse = $event.reverse;   
    this.getRecentDetections(params);
  }
}
