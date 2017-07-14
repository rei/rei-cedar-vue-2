**NOTE:** `v-model` is required.

### Events
| Name | Type | Description | |
| --- | --- | --- |
| `change` | Boolean or Array | `v-model` value. Fires on check/uncheck. |

### Examples

#### Standard checkbox

`v-model` can be anything and is shared to all of the radios in the group.

```
var model = '';

<div>
  <cdr-radio name="example" value="a1" v-model="ex1">A1</cdr-radio>
  <cdr-radio name="example" value="a2" v-model="ex1">A2</cdr-radio>
  <cdr-radio name="example" :value="{val:'a3'}" v-model="ex1">A3</cdr-radio>
  <p>Group A Picked: {{ex1}}</p>
</div>
```

#### Preselected

`v-model` is preset to one of the values in the group.

```
var model2 = 'a2';

<div>
<cdr-radio name="example" value="a1" v-model="model2">A1</cdr-radio>
<cdr-radio name="example" value="a2" v-model="model2">A2</cdr-radio>
<cdr-radio name="example" :value="{val:'a3'}" v-model="model2">A3</cdr-radio>
<p>Group A Picked: {{model2}}</p>
</div>
```
