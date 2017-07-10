**NOTE:** `v-model` is required.

### Events
| Name | Type | Description | |
| --- | --- | --- |
| `input` | String or Array(multiple) | Current input value. Fires when selection changed. |

### Examples

```
const selected = '';
const multiple = [];
const multipleData = ['a', 'b', 'c', 'd'];

<div>
  <cdr-select label="Normal with prompt" v-model="selected" prompt="Choose one">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </cdr-select>

  <cdr-select label="Multiple No Prompt" v-model="multiple" multiple size="4" :options="multipleData"></cdr-select>
</div>
```
