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

<cdr-checkbox :text="`Checkbox: ${model}`" v-model="model"></cdr-checkbox>
```

#### Group of checkboxes

`v-model` is an Array. Checkbox value can be anything and value is set on the checkbox.

```
var model = [];
var valE = {val: 'X', otherVal: 'Y', more: [8,9]};

<div>
  <cdr-checkbox text="A" value="A" v-model="model"></cdr-checkbox>
  <cdr-checkbox text="B" value="B" v-model="model"></cdr-checkbox>
  <cdr-checkbox text="C" :value="{value: 'C'}" v-model="model"></cdr-checkbox>
  <cdr-checkbox text="D" :value="[1,2,3]" v-model="model"></cdr-checkbox>
  <cdr-checkbox text="E" :value="valE" v-model="model"></cdr-checkbox>
  <p>Value: {{model}}</p>
</div>
```

#### Preselected

Standard: set `v-model` value to true.

```
var model = true;

<cdr-checkbox :text="`Checkbox: ${model}`" v-model="model"></cdr-checkbox>
```

Multiple: add value to the `v-model` array.

```
var model = ["A", {value: 'C'}, [1,2,3]];
var valE = {val: 'X', otherVal: 'Y', more: [8,9]};

<div>
<cdr-checkbox text="A" value="A" v-model="model"></cdr-checkbox>
<cdr-checkbox text="B" value="B" v-model="model"></cdr-checkbox>
<cdr-checkbox text="C" :value="{value: 'C'}" v-model="model"></cdr-checkbox>
<cdr-checkbox text="D" :value="[1,2,3]" v-model="model"></cdr-checkbox>
<cdr-checkbox text="E" :value="valE" v-model="model"></cdr-checkbox>
<p>Value: {{model}}</p>
</div>
```
