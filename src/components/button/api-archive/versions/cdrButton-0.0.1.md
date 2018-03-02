## CdrButton


src/components/button/cdrButton.vue


Cedar 2 component for button

### Props, Methods, Events, Slots

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
theme | string | n/a | false | Name of the css module theme
modifier | string | n/a | false | Space separated list of modifiers. See below for possible values
type | string | "button" | false | {button, submit, reset}. Defines the button type.
onClick | func | function() { return function () { return null; }; } | false | Add custom click actions.

Slot | Description
--- | ---
default | 
