import { RecentDetectionResponseObject } from './recent-detection-response-object';

export interface RecentDetectionResponse {
    data:Array<RecentDetectionResponseObject>;
    paging:{
        next:string;
    }
}
