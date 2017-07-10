While the simple card is a generic wrapper that does not do much more than provide a chome, the content card is a composition of compomnents and is intended to fill a specific role as outlined. 
 
This Component enhances the behavior of specific presentation parts that are important for this use case, knotice that by providing a title url that the entire card becomes "hot". Note also that this does not alter the tab index of nested elements and remains accessible to screen readers. 
 
### Examples 
 
#### Content card  
``` 
<cdr-card-content 
  level="2" 
  title="Tiger Mountain Loop" 
  media="http://placehold.it/350x150" 
  media-gutter="top"> 
  <p> A block of content </p> 
</cdr-card-content> 
``` 
#### Linked content card  
``` 
<cdr-card-content 
  level="2" 
  label="MTB Project" 
  title="Tiger Mountain Loop" 
  title-url="http://rei.com" 
  media="http://placehold.it/350x150" 
  media-gutter="top"> 
</cdr-card-content> 
``` 
#### Content card with attribution  
``` 
<cdr-card-content 
  profile="http://placehold.it/50x50" 
  author="Harald Hardrada" 
  author-title="3" 
  creation-time="Issaquah Alps, WA" 
  level="2" 
  label="MTB Project" 
  title="Tiger Mountain Loop" 
  title-url="http://rei.com" 
  media="http://placehold.it/350x150" 
  attribution > 
</cdr-card-content> 
``` 
#### Content card with attribution, snapshot, summary, and actions 
``` 
<cdr-card-content 
  attribution 
  profile="http://placehold.it/50x50" 
  author="Harald Hardrada" 
  author-title="3" 
  creation-time="Issaquah Alps, WA" 
  media="http://placehold.it/350x150" 
  media-super-title 
  label="MTB Project" 
  title="Tiger Mountain Loop" 
  level="2" 
  media-url 
  title-url="http://rei.com" 
  snapshot 
  snapshot-location="17.3 mi away" 
  extend-content 
  summary 
  actions 
  action-one-modifier="secondary" 
  action-one-copy="B1" 
  action-two-modifier="secondary" 
  action-two-copy="B2" 
  footer 
  footer-action-one-modifier="secondary" 
  footer-action-one-copy="like" 
  footer-action-two-modifier="secondary" 
  footer-action-two-copy="bookmark"> 
  <div slot="summary"> 
    <p>Tiger Mountain is a multi-use recreation area near Seattle. In recent years, new trails and the continued work of Evergreen Mountain…</p> 
     <cdr-list modifier="bulleted"> 
      <li>2,913’ ascent</li> 
      <li>2,992’ high</li> 
      <li>1,451 low</li> 
    </cdr-list> 
    <section> 
      <p> 
        <span>$25</span> member / $50 non-member 
      </p> 
    </section> 
  </div> 
  <cdr-button-group slot="actions"> 
    <cdr-button>B1</cdr-button> 
  <cdr-button modifier="secondary">B2</cdr-button> 
  </cdr-button-group> 
</cdr-card-content> 
``` 
