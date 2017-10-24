While the simple card is a generic wrapper that does not do much more than provide a chome, the activity card is a composition of compomnents and is intended to fill a specific role as outlined. 
 
This Component enhances the behavior of specific presentation parts that are important for this use case, knotice that by providing a title url that the entire card becomes "hot". Note also that this does not alter the tab index of nested elements and remains accessible to screen readers. 
 
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
