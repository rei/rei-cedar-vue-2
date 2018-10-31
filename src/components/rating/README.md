# <span class="display-name">CdrRating<span>

Ratings are rounded to nearest .25 for displaying stars.


{small, medium, large}

Default is medium.

### Large + compact

```
<div>
  <cdr-rating rating="5" count="10" size="large"></cdr-rating>
  <cdr-rating :rating="1" :count="100" size="large" compact></cdr-rating>
</div>
```

### Medium + compact

```
<div>
  <cdr-rating rating="5" count="10" size="medium"></cdr-rating>
  <cdr-rating :rating="1" :count="100" size="medium" compact></cdr-rating>
</div>
```

### Small + compact

```
<div>
  <cdr-rating rating="5" count="10" size="small"></cdr-rating>
  <cdr-rating :rating="1" :count="100" size="small" compact></cdr-rating>
</div>
```