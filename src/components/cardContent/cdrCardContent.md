While the simple card is a generic wrapper that does not do much more than provide a chome, the content card is a composition of compomnents and is intended to fill a specific role as outlined. 
 
This Component enhances the behavior of specific presentation parts that are important for this use case, knotice that by providing a title url that the entire card becomes "hot". Note also that this does not alter the tab index of nested elements and remains accessible to screen readers. 
 
### Examples 
 
#### Content card  
``` 
<cdr-card-content
  media="http://placehold.it/350x150"
  title="Tiger Mountain Loop">
  <p> A block of content </p> 
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
  title-url="http://rei.com"
  snapshot
  snapshot-location="17.3 mi away">
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
  level="2"
  title-url="http://rei.com">
</cdr-card-content>
``` 
#### Content card with a summary
```
<cdr-card-content 
  media="http://placehold.it/350x150"
  label="MTB Project"
  title="Tiger Mountain Loop"
  title-url="http://rei.com"> 
  <div slot="summary"> 
    <p>Tiger Mountain is a multi-use recreation area near Seattle. In recent years, new trails and the continued work of Evergreen Mountain…</p> 
     <cdr-list modifier="bulleted"> 
      <li>2,913’ ascent</li> 
      <li>2,992’ high</li> 
      <li>1,451 low</li> 
    </cdr-list> 
  </div> 
  <cdr-button-group slot="actions">
    <cdr-button>B1</cdr-button>
  <cdr-button modifier="secondary">B2</cdr-button>
  </cdr-button-group>
</cdr-card-content>
```
#### Content card with attribution, snapshot, summary, and actions 
``` 
<cdr-card-content
  media="http://placehold.it/350x150"
  title="Tiger Mountain Loop">
    <p slot="price">
      <span>$25</span> member / $50 non-member
    </p>
</cdr-card-content>
``` 
#### Content card with a status messaging
``` 
<cdr-card-content
  media="http://placehold.it/350x150"
  title="Tiger Mountain Loop">
    <p slot="messaging"> 11 spots availible</p> 
</cdr-card-content> 
``` 
#### Content card with actions 
``` 
<cdr-card-content 
  media="http://placehold.it/350x150"
  label="MTB Project" 
  title="Tiger Mountain Loop" 
  title-url="http://rei.com" 
  action-one-modifier="secondary" 
  action-one-copy="B1" 
  action-two-modifier="secondary" 
  action-two-copy="B2"> 
  <cdr-button-group slot="actions"> 
    <cdr-button>B1</cdr-button> 
  <cdr-button modifier="secondary">B2</cdr-button> 
  </cdr-button-group> 
</cdr-card-content> 
``` 
#### Content card with user settings
``` 
<cdr-card-content 
  media="http://placehold.it/350x150"
  title="Tiger Mountain Loop" 
  user-settings-action-one-modifier="secondary" 
  user-settings-action-one-copy="like" 
  user-settings-action-two-modifier="secondary" 
  user-settings-action-two-copy="bookmark"> 
</cdr-card-content> 
``` 
#### Content card with attribution, snapshot, price, summary, actions, and user settings 
``` 
<cdr-card-content 
  profile="http://placehold.it/50x50" 
  author="Harald Hardrada" 
  author-title="3" 
  creation-time="Issaquah Alps, WA" 
  media="http://placehold.it/350x150"
  label="MTB Project" 
  title="Tiger Mountain Loop" 
  level="2" 
  title-url="http://rei.com"
  snapshot
  snapshot-location="17.3 mi away"  
  action-one-modifier="secondary" 
  action-one-copy="B1" 
  action-two-modifier="secondary" 
  action-two-copy="B2" 
  user-settings-action-one-modifier="secondary" 
  user-settings-action-one-copy="like" 
  user-settings-action-two-modifier="secondary" 
  user-settings-action-two-copy="bookmark"> 
  <p slot="price">
    <span>$25</span> member / $50 non-member
  </p>
  <div slot="summary"> 
    <p>Tiger Mountain is a multi-use recreation area near Seattle. In recent years, new trails and the continued work of Evergreen Mountain…</p> 
     <cdr-list modifier="bulleted"> 
      <li>2,913’ ascent</li> 
      <li>2,992’ high</li> 
      <li>1,451 low</li> 
    </cdr-list> 
  </div> 
   <p slot="messaging"> 11 spots availible</p> 
  <cdr-button-group slot="actions"> 
    <cdr-button>B1</cdr-button> 
  <cdr-button modifier="secondary">B2</cdr-button> 
  </cdr-button-group> 
</cdr-card-content> 
``` 
