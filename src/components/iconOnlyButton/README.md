## <span class="usage">Usage</span>

`cdr-icon-only-button` can render as a button or an anchor element. The default is a button. 

```
  <cdr-icon-only-button
    aria-label="Twitter"
  ><icon-twitter modifier="inherit-color" 
  /></cdr-icon-only-button>
```

The icon element needs `modifier="inherit-color"` added so that the fill color on the icon is correct. 

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

`cdr-icon-only-button` needs some extra accessibility work since it doesn't include human readable text. Use `aria-label` to give screen readers additional context for the button.

`cdr-close-button` and `cdr-play-button` don't need `aria-label`, as it's already handled in the component itself.

Since `cdr-icon-only-button` can render as a button or an anchor, users should focus on what the semantically correct element would be.

## <span class="">Installation</span>

Import the component to use it in your application.

```
  npm i @rei/cdr-icon-only-button
```

## <span class="">Contributing</span>

### Request an an enhancement
Join us on Slack at [#design-systems](https://rei.slack.com/messages/CA58YCGN4).
