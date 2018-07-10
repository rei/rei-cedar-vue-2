## <span class="usage">Usage</span>

```
  <cdr-button
    type="button"
    @onClick="myFunction"
  >Button</cdr-button>
```

### <span class="variants">Variants</span>

#### <span class="anchor">Anchor</span>

`cdr-button` can render as either a button or an anchor element with the same styling; button is the default. 

```
  <cdr-button
    tag="a"
    href="https://rei.com"
  >REI</cdr-button>
```

#### <span class="secondary">Secondary</span>

Adding a `modifier` attribute with a value of `secondary` will render the secondary button style. 

```
  <cdr-button
    modifier="secondary"
    @onClick="myFunction"
  >Secondary</cdr-button>
```

#### <span class="">Composing with Icons</span>

The default slot in `cdr-button` can be used to include an icon. `cdr-button` does not include `cdr-icon` as a dependency, so you will need to import it into your composition. If you are trying to create an icon-only button (i.e. no text), there's a separate component for that: `@rei/cdr-icon-only-button`.

```
  import { CdrIcon } from '@rei/cdr-icon'

  <cdr-button
    size="large"
    modifier="secondary"
  >
    <template name="icon">
      <cdr-icon
        class="cdr-button__icon"
        use="#download"
        modifier="inherit-color"
      />
    </template>
    Button and Icon
  </cdr-button>
```

You can also use single icon components. Per design guidelines, icons should always display to the left of text.

```
  import { IconCheckLg } from '@rei/cdr-icon'

  <cdr-button>
    <template name="icon">
      <icon-check-lg
        class="cdr-button__icon"
      />
    </template>
    Medium and Icon
  </cdr-button>
```

The `cdr-button__icon` class needs to be added to the icon element inside of `cdr-button`. This allows `cdr-button` to dictate some icon styling across modularized CSS.

## <span class="accessibility">Accessibility</span>

Since `cdr-button` can render as a button or an anchor, users should focus on what the semantically correct element would be. It will always look like a button, so as long as the correct semantic choice is made, the default ARIA context should suffice. 

## <span class="">Installation</span>

Import the component to use it in your application.

```
  npm i @rei/cdr-button
```

## <span class="">Contributing</span>

### Request an an enhancement
Join us on Slack at [#design-systems](https://rei.slack.com/messages/CA58YCGN4).
