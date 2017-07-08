While the simple card is a generic wrapper that does not do much more than provide a chome, the content card is a composition of compomnents and is intended to fill a specific role as outlined.

This Component enhances the behavior of specific presentation parts that are important for this use case, knotice that by providing a heading url that the entire card becomes "hot". Note also that this does not alter the tab index of nested elements and remains accessible to screen readers.

### Examples

#### Content card 
```
<cdr-card-content
  level="2"
  heading="Tiger Mountain Loop"
  media="http://placehold.it/350x150"
  content-a-gutter="top"
  >
  <p> A block of content </p>
</cdr-card-content>
```
#### Content card with attribution 
```
<cdr-card-content
  profile="http://placehold.it/50x50"
  author="Harald Hardrada"
  author-heading="3"
  creation-time="Issaquah Alps, WA"
  level="2"
  label="MTB Project"
  heading="Tiger Mountain Loop"
  heading-url="http://rei.com"
  media="http://placehold.it/350x150"
  attribution >
</cdr-card-content>
```
