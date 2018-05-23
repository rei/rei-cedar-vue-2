## <span class="usage">Usage</span>

`cdr-icon-only-button` can render as a button or an anchor element. The default is a button. 

```
  <cdr-icon-only-button
  ><icon-twitter modifier="inherit-color" 
  /></cdr-icon-only-button>
```

The icon element needs `modifier="inherit-color"` added so that the fill color on the icon is correct. 

The `cta-style` prop will allow you to change the color to match different themes. Accepted values are `brand`, `dark`, `light`, and `sale`.

```
  <cdr-cta
    tag="a"
    cta-style="sale"
    href="https://rei.com"
  >Learn More</cdr-cta>
```

### <span class="variants">Variants</span>

Separate components for `cdr-close-button` and `cdr-play-button` are included in this package.

```
  import { CdrCloseButton } from '@rei/cdr-icon-only-button'

  <cdr-close-button
    :on-dark="true"
    :on-click="close"
  />
```

## <span class="accessibility">Accessibility</span>

Since `cdr-icon-only-button` can render as a button or an anchor, users should focus on what the semantically correct element would be. It will always look like a call to action button, so as long as the correct semantic choice is made, the default ARIA context should suffice. 

## <span class="">Installation</span>

Import the component to use it in your application.

```
  npm i @rei/cdr-icon-only-button
```

## <span class="">Contributing</span>

### Request an an enhancement
Join us on Slack at [#design-systems](https://rei.slack.com/messages/CA58YCGN4).
