### Examples 
 
#### Activity card  
``` 
var snapshotData = ['7.5 mi', 'out & back', '286 ft Ele Gain'];

var cardData = {
  media: 'http://placehold.it/350x150',
  label: 'hiking',
  title: 'Snow Lake Trail'
};

<cdr-activity-card 
  :media="cardData.media"
  :label="cardData.label"
  title-url="http://rei.com"
  :title="cardData.title"
  :snapshot="snapshotData"
  location="Seattle, WA"
  rating="5"
  count="138">
</cdr-activity-card>
```
