A composition of `cdr-input` and `cdr-button`that gives you a simple search box. Passes all other attributes and events to `cdr-input`.

### Events
| Name | Type | Description | |
| --- | --- | --- |
| `input` | String | Current input value. Fires while typing. |

### Examples

#### Standard

```
var searchTerm = '';
function runSearch() {
  console.log('Searching');
}

<form>
  <cdr-search v-model="searchTerm" :click="runSearch"></cdr-search>
  <p>Entered: {{searchTerm}}</p>
</form>
```

#### Bare

```
var searchTerm = '';
function runSearch() {
  console.log('Searching');
}

<form>
  <cdr-search v-model="searchTerm" :click="runSearch" bare></cdr-search>
  <p>Entered: {{searchTerm}}</p>
</form>
```