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
  <cdr-radio text="A1" name="example" value="a1" v-model="ex1"></cdr-radio>
  <cdr-radio text="A2" name="example" value="a2" v-model="ex1"></cdr-radio>
  <cdr-radio text="A3" name="example" :value="{val:'a3'}" v-model="ex1"></cdr-radio>
  <p>Group A Picked: {{ex1}}</p>
</div>
```

#### Preselected

`v-model` is preset to one of the values in the group.

```
var model = 'a2';

<div>
<cdr-radio text="A1" name="example" value="a1" v-model="ex1"></cdr-radio>
<cdr-radio text="A2" name="example" value="a2" v-model="ex1"></cdr-radio>
<cdr-radio text="A3" name="example" :value="{val:'a3'}" v-model="ex1"></cdr-radio>
<p>Group A Picked: {{ex1}}</p>
</div>
```
