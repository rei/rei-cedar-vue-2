## CdrInput


src/components/input/cdrInput.vue


Cedar 2 component for input

### Props, Methods, Events, Slots

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
id | string | n/a | false | id for the input that is mapped to the label 'for' attribute.
If one is not provided, it will be auto generated.
label | string | n/a | true | Label text. This is required for a11y even if hiding the label with `hideLabel`.
hideLabel | boolean | n/a | false | Removes the label element but sets the input 'aria-label' to `label` text for a11y.
multiLine | boolean | n/a | false | Changes the input to a textarea.
pattern | string | n/a | false | Error message to be displayed when `pattern` validation fails.
patternError | string | n/a | false | 
feedback | boolean | n/a | false | Enables icon feedback as part of validation
for valid, warn, and error states.
type | string | "text" | false | Input type. NOTE: This component is meant for text style inputs.
Other input types (checkbox, radio) have their own components.
rules | array | function() { return []; } | false | Array of functions. Provide your own validation function(s).
Takes the input string and outputs an object with a state and message.
State is a String with value `valid`, `warning`, or `error`.
Message is any String.
debounce | boolean | false | false | Boolean or Number.
true has a default of 500ms.
Providing a number will set debounce to that (in ms).
false is no debounce.
disabled | boolean | n/a | false | 
required | boolean | n/a | false | 
immediateValidate | boolean | n/a | false | 
value | string|number|boolean|object|array|symbol|func | n/a | false | 

Slot | Description
--- | ---
preicon | 
