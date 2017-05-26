## API

| Prop | Type | Default | Required | Values | Description |
| --- | --- | --- | --- | --- | --- |
| `:type` | String | 'button' |  | 'button', 'submit', 'reset' | Defines the button type |
| `:handle-click` | Function | () |  |  | Allows you to add custom click actions |
| `:modifier` | Array (of Strings) |  |  | {'alternate', 'secondary', 'secondary-alternate'} {'small', 'extra-small'} {'block', 'fixed'} OR 'link' | Button modifiers can be combined up to 1 from each grouping. Adding 'link' exposes the same modifiers as Anchor and the other button modifiers shouldn't be used with it |

