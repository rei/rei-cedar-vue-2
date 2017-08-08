A composition of `cdr-input`, `cdr-button`, and `cdr-icon` that gives you a simple search box. Passes all other attributes and events to `cdr-input`.

### Events
| Name | Type | Description | |
| --- | --- | --- |
| `input` | String | Current input value. Fires while typing. |

### Examples

```
var searchTerm = '';
function runSearch() {
  console.log('Searching');
}

<div>
  <cdr-search v-model="searchTerm" :click="runSearch"></cdr-search>
  <p>Entered: {{searchTerm}}</p>
</div>
```