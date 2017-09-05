While the simple card is a generic wrapper that does not do much more than provide a chome, the content card is a composition of compomnents and is intended to fill a specific role as outlined. 
 
This Component enhances the behavior of specific presentation parts that are important for this use case, knotice that by providing a title url that the entire card becomes "hot". Note also that this does not alter the tab index of nested elements and remains accessible to screen readers. 
 
### Examples 
 
#### Content card  
``` 
var snapshotData = ['7.5 mi', 'out & back', '286 ft Ele Gain'];

var cardData = {
  media: 'http://placehold.it/350x150',
  label: 'hiking',
  title: 'Snow Lake Trail'
};

<cdr-card-content 
  :media="cardData.media"
  :label="cardData.label"
  :title="cardData.title"
  :snapshot="snapshotData"
  summary="<p>Snoqualmie National Forest, Wa</p>"
  rating="5"
  count="138">
</cdr-card-content>
``` 
#### Linked content card  
``` 
<cdr-card-content
  media="http://placehold.it/350x150"
  title="Tiger Mountain Loop"
  title-url="http://rei.com"> 
</cdr-card-content> 
``` 
#### Content card with label
``` 
<cdr-card-content 
  media="http://placehold.it/350x150"
  label="MTB Project"
  title="Tiger Mountain Loop"
  title-url="http://rei.com">
</cdr-card-content>
``` 
#### Content card with snapshot
``` 
<cdr-card-content
  media="http://placehold.it/350x150"
  title="Tiger Mountain Loop"
  title-url="http://rei.com">
</cdr-card-content>
``` 
#### Content card with attribution
``` 
<cdr-card-content
  profile="http://placehold.it/50x50"
  author="Harald Hardrada"
  author-title="3"
  creation-time="Issaquah Alps, WA"
  media="http://placehold.it/350x150"
  title="Tiger Mountain Loop"
  title-url="http://rei.com">
</cdr-card-content>
``` 
#### Content card with a summary
```
<cdr-card-content 
  media="http://placehold.it/350x150"
  label="MTB Project"
  title="Tiger Mountain Loop"
  title-url="http://rei.com"
  summary="<p>Tiger Mountain is a multi-use recreation area near Seattle. In recent years, new trails and the continued work of Evergreen Mountain…</p>">
</cdr-card-content>
``` 
