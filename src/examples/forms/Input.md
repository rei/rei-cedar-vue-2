## Events
| Name | Type | Description | |
| --- | --- | --- |
| `input` | String | Current input value. Fires while typing. |
| `change` | String | New input value (if changed). Fires on blur. |
| `blur` | Event | Fires when input loses focus. |
| `focus` | Event | Fires when input gains focus. |
| `paste` | Event | Fires when text is pasted into input. |

## API

| Prop | Type | Default | Required | Values | Description |
| --- | --- | --- | --- | --- | --- |
| `id` | String |  |  |  | Assigns an id to the input and also the for attribute of the label for a11y. One will be generated if none is supplied. |
| `label` | String |  | * |  | Label text. Required for a11y |
| `hide-label` | Boolean | false |  |  | Doesn't create a label element and sets aria-label on the input instead. Label is still required. |
| `name` | String |  |  |  | Sets a name attribute on the input |
| `disabled` | Boolean | false |  |  | Sets the disabled attribute on the input |
| `required` | Boolean | false |  |  | Sets the required attribute on the input. Also adds a validation rule to validated that the input is not empty. |
| `placeholder` | String |  |  |  | Sets the placeholder of the input |
| `autofocus` | Boolean | false |  |  | Sets the autofocus attribute on the input |
| `readonly` | Boolean | false |  |  | Sets the readonly attribute on the input |
| `maxlength` | Number |  |  |  | Sets the maxlength attribute on the input |
| `multiline` | Boolean | false |  |  | Changes the input to a textarea |
| `rows` | Boolean |  |  |  | If multiline is set, this will set the rows attribute of the textarea |
| `pattern` | String |  |  |  | A regex string used for simple validation |
| `pattern-error` | String |  |  |  | The error message displayed when `pattern` validation fails |
| `feedback` | Boolean | false |  |  | Enables icon feedback as part of validation |
| `type` | String | 'text' |  |  | Sets the input type |
| `rules` | Array of Functions |  |  |  | Proved your own validation function. Takes the input string and outputs an object with a state and message. State is a String with value `valid`, `warning`, or `error`. Message is any String. |
| `debounce` | Boolean or Number | false |  |  | True has a default of 500ms. Providing a number will set debounce to that (in ms). false is no debounce. |
| `tabindex` | Number | 0 |  |  | Sets the tabindex of the input. |
| `immediate-validate` | Boolean | false |  |  | If `true` validation will run on mount |
| `v-model` | * |  |  |  | Current input value |
