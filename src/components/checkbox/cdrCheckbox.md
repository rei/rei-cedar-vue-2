**NOTE:** `v-model` is required.

### Events
| Name | Type | Description | |
| --- | --- | --- |
| `change` | Boolean or Array | `v-model` value. Fires on check/uncheck. |

### Examples

#### Standard checkbox

`v-model` is a boolean. Checkbox value is either true or false.

```
var model = false;

<cdr-checkbox v-model="model">Checkbox: {{model}}</cdr-checkbox>
```

#### Group of checkboxes

`v-model` is an Array. Checkbox value can be anything and value is set on the checkbox.

```
var model = [];
var valE = {val: 'X', otherVal: 'Y', more: [8,9]};

<div>
  <cdr-checkbox value="A" v-model="model">A</cdr-checkbox>
  <cdr-checkbox value="B" v-model="model">B</cdr-checkbox>
  <cdr-checkbox :value="{value: 'C'}" v-model="model">C</cdr-checkbox>
  <cdr-checkbox :value="[1,2,3]" v-model="model">D</cdr-checkbox>
  <cdr-checkbox :value="valE" v-model="model">E</cdr-checkbox>
  <p>Value: {{model}}</p>
</div>
```

#### Preselected

Standard: set `v-model` value to true.

```
var model = true;

<cdr-checkbox v-model="model">Checkbox: {{model}}</cdr-checkbox>
```

Multiple: add value to the `v-model` array.

```
var model = ["A", {value: 'C'}, [1,2,3]];
var valE = {val: 'X', otherVal: 'Y', more: [8,9]};

<div>
<cdr-checkbox value="A" v-model="model">A</cdr-checkbox>
<cdr-checkbox value="B" v-model="model">B</cdr-checkbox>
<cdr-checkbox :value="{value: 'C'}" v-model="model">C</cdr-checkbox>
<cdr-checkbox :value="[1,2,3]" v-model="model">D</cdr-checkbox>
<cdr-checkbox :value="valE" v-model="model">E</cdr-checkbox>
<p>Value: {{model}}</p>
</div>
```
