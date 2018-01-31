Note: immediate children of `cdr-col` are treated as flex items (due to a flex height bug in Safari). As a result, if you want to have more than one child element they should be wrapped in a single `div` element.

Bad:
```html
...
<cdr-col>
  <div/>
  <div/>
  <div/>
</cdr-col>
...
```
Good:
```html
...
<cdr-col>
  <div>
    <div/>
    <div/>
    <div/>
  </div>
</cdr-col>
...
```


NOTE: anytime a `cdr-col` is nested within another `cdr-col` the parent needs `is-row` to function correctly

```html
...
<cdr-col is-row>
  <cdr-col>
    <div/>
  </cdr-col>
  <cdr-col>
    <div/>
  </cdr-col>
  <cdr-col is-row cols="3">
    <cdr-col>
      <div/>
    </cdr-col>
  </cdr-col>
</cdr-col>
...
```

See cdr-row for complex example.

### Examples

#### Span

```html
<div class="cdr-container-fluid">
  <h4>Basic</h4>
  <cdr-row>
    <cdr-col span="3">
      <div class="row-demo">A</div>
    </cdr-col>
    <cdr-col span="3">
      <div class="row-demo">B</div>
    </cdr-col>
    <cdr-col span="3">
      <div class="row-demo">C</div>
    </cdr-col>
    <cdr-col span="3">
      <div class="row-demo">D</div>
    </cdr-col>
    <cdr-col span="3">
      <div class="row-demo">E</div>
    </cdr-col>
  </cdr-row>
</div>
```
