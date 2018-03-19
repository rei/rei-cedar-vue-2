### Modifiers
  * Modifiers
  * heading-large
  * heading-medium
  * heading-small
  * display
  * subheading

### disable-responsive 
  adds the utility class of `.cdr-text--disable-responsive` to a heading. This allows for a consistent font across breakpoints.

Accepts typography utility classes.

### Examples

```
<div>
  <cdr-heading level="1" modifier="heading-small">An h1</cdr-heading>

  <cdr-heading 
    level="2" 
    modifier="display"
    disable-responsive> An h2 that will not change sizes with breakpoints </cdr-heading>
</div>
```
