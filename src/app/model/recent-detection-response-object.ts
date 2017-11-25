import { Media } from './media';
import { Detection } from './detection';

export interface RecentDetectionResponseObject {
    detections:Array<Detection>;
    focus:any;
    media:Media;
    media_list:Array<any>;
    updated_at:any//unix timestamp
}

/**data[i].media.media_url which is the url of the media to display. -
data[i].updated_at which is the UNIX timestamp the media was detected at. -
data[i].detections[j].subject_uid which can either be "cat_9iq" or "dog_7fp" -
data[i].detections[j].uncal_prob whi */
