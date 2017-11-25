export class RecentDetectionParams {
    limit:number=100;
    start:Float64Array;
    end:Float64Array;
    probability_lower:number=0;
    probability_upper:number=1;
    reverse:boolean=false;
    cursor:number;
}
/**limit (default: 100) to return a given number of records. Use a lower number for improved
response time.
● start and end , UNIX timestamp to filter detections by date (e.g 1510041600 ).
● probability_lower (default: 0) and probability_upper (default: 1) to filter records by probability
(float between 0 and 1).
● reverse to return records in the reverse order.
● cursor UNIX timestamp to retrieve a given page (see pagination section below) */