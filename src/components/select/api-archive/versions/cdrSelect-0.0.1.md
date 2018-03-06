## CdrSelect


src/components/select/cdrSelect.vue


Cedar 2 component for select

### Props, Methods, Events, Slots

Prop Name | Type | Default | Require | Description
--- | --- | --- | --- | ---
label | string | n/a | true | Label text.
id | string | n/a | false | id for the select that is mapped to the label 'for' attribute.
If one is not provided, it will be generated.
hideLabel | boolean | n/a | false | Removes the label element but sets the select 'aria-label' to `label` text for a11y.
prompt | string | n/a | false | Adds an option that is disabled and selected by default to serve
as a 'placeholder' for the select.
options | array | n/a | false | Build options programatically with data.
Array of objects [{ text: String, value: String}] to give greater control.
Array of strings ['String'] for simpler setup (value and text will be the same).
value | string|number|boolean|object|array|symbol|func | n/a | false | 
required | boolean | n/a | false | 
size | string | n/a | false | 
multiple | boolean | n/a | false | 

Slot | Description
--- | ---
default | 
