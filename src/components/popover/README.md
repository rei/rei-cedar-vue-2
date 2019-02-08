# @rei/popover

## Installation
```bash
$npm i -S @rei/popover
```
## Requirements

## API

This module exports a plain Vue.js component.

### Props

| Name                    | Type        | Required | Purpose                                                                                 |
| ----------------------- | ----------  | -------- | --------------------------------------------------------------------------------------- |
| `toggleButtonSelector`  | `string`    | false    | If you want the popover to toggle on and off via button click, pass in the button selector here.  The code then does document.querySelector([your selector here]) to get the button. |
| `hasDefaultStyling`     | `boolean`   | false    | True by default. If true, the popover will have its default styles. If false, it will only have very basic styles. This is useful if the popover needs to lose its popover appearance on mobile. |
| `ariaLabelledBy`     | `string`   | false    | The `id` of the HTML element that acts as the popover label. |
| `ariaDescribedBy`     | `string`   | false    | The `id` of the text element that acts as the popover description. |

### Slots

This component has one unnamed slot which contains the entire content of the box. So just pass whatever content you want to appear in the popover into the main slot.

## Styling
To include the default styling:
```css
@import url('@rei/popover'); /* postcss-import */
@import url('@rei/popover/index.css'); /* standard css import */
```

This component will automatically position itself horizontally centered below its container element. For this to work,
you must give the container element `position: relative;`. Generally, if you are using a toggle button to toggle the popover on and off, you will put both the `popover` component and it's toggle button in the container div like this:

```html
<div class="popover-container">
  <button class="popover-toggle-button">Click me!</button>
  <popover />
</div>
```

Also, you can use this component within a vue project, or you can use `appendChild` to mount it within a DOM element external to your
Vue application.  See
https://git.rei.com/projects/FEDPACK/repos/adventures-ui/browse and https://git.rei.com/projects/FEDPACK/repos/adventures-nav-popover/browsefor an example of how that is done.

The class names are not guaranteed to stay constant between minor / patch versions, so do not attempt to override them.

## Usage
```vue
// In your imports
import Popover from '@rei/popover';

// In your components section of the vue component you want to render the activity card within:
export default {
  components: {
    Popover,
  },
}

// In your vue template:
<popover
  toggle-button-selector="[data-js='popover-button']"
>
  <h4>Welcome to my amazing popover</h4>
  <p>Thanks for stopping by.</p>
</popover>
```