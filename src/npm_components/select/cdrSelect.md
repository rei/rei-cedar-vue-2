**NOTE:** `v-model` is required.

### Events
| Name | Type | Description | |
| --- | --- | --- |
| `input` | String or Array(multiple) | Current input value. Fires when selection changed. |

### Examples

#### Standard

```
var selected = '';

<div>
  <cdr-select label="Normal" v-model="selected">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </cdr-select>
  <p>Selected: {{selected}}</p>
</div>
```

#### With prompt

```
var selected = '';

<div>
  <cdr-select label="Normal with prompt" v-model="selected" prompt="Choose one">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </cdr-select>
  <p>Selected: {{selected}}</p>
</div>
```

#### Data driven options

```
var selected = '';
var data = ['a', 'b', 'c', 'd'];

<div>
  <cdr-select label="Built with data" v-model="selected" :options="data"></cdr-select>
  <p>Selected: {{selected}}</p>
</div>

```
