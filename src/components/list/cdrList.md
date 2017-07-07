### Modifiers

{unstyled, bulleted, numbered, menu}

Note: type doesn't affect the modifier.

### Examples

```
<div>
  <p>Default:</p>
  <cdr-list>
    <li>List default</li>
    <li>List default
      <cdr-list>
        <li>List default - nested</li>
        <li>List default - nested</li>
      </cdr-list>
    </li>
  </cdr-list>

  <p>Unstyled:</p>
  <cdr-list modifier="unstyled">
    <li>List unstyled</li>
    <li>List unstyled</li>
  </cdr-list>

  <p>Bulleted:</p>
  <cdr-list modifier="bulleted">
    <li>List bulleted</li>
    <li>List bulleted</li>
  </cdr-list>

  <p>Numbered:</p>
  <cdr-list modifier="numbered">
    <li>List numbered</li>
    <li>List numbered</li>
  </cdr-list>

  <p>Menu:</p>
  <cdr-list modifier="menu">
    <li><a href="/">List menu</a></li>
    <li><a href="/">List menu</a></li>
  </cdr-list>

</div>
```
