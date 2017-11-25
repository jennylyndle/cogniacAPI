import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { FilterValidators } from '../../model/validators';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output()
  filters = new EventEmitter<any>();

  form:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      minProb: ['0',FilterValidators.isProbabilityValid],
      maxProb: ['1',FilterValidators.isProbabilityValid],
      startDate:[],
      endDate:[],
      reverse:[false]
    });
  }
  
  filterDetections($event){
    //moment(moment("10/15/2014 9:00", "MM/DD/YYYY HH:mm").unix()*1000)
//2017-11-10T08:00:00.000Z
let startDate = null,endDate=null;

    if($event==''){
      this.form.reset();
      this.filters.emit({minProb:0,
        maxProb:1,
        startDate:null,
        endDate:null,
        reverse:false
      });
    }
    else{
      if(this.form.value.startDate!==null)
      {
        startDate = moment(moment(this.form.value.startDate, "YYYY-MM-DDTHH:mm:ss.SSSZ").unix()).valueOf();
      }
  
      if(this.form.value.endDate!==null){
        endDate = moment(moment(this.form.value.endDate, "YYYY-MM-DDTHH:mm:ss.SSSZ").unix()).valueOf();
      }
        this.filters.emit({minProb:this.form.value.minProb,
        maxProb:this.form.value.maxProb,
        startDate:startDate,
        endDate:endDate,
        reverse:this.form.value.reverse
      });
    }
    
  }

}
