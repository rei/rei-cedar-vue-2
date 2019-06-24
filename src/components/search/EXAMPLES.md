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