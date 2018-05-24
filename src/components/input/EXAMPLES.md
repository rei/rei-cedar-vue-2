### Examples

#### Single line with feedback icons, error messages, and a debounced validation rule

```
// Stuff for demo
var debounce = '';
function validateFn(inputText) {
  var obj = {};
  if (inputText === 'hi') {
    obj.state = 'valid';
  } else if (inputText === '') {
    obj.state = 'warn';
    obj.message = 'Warning Empty';
  } else if (!isNaN(inputText) && inputText !== '') {
    obj.state = 'error';
    obj.message = 'Error: needs to be letters';
  } else {
    obj.state = 'error';
    obj.message = 'Error Message';
  }
  return obj;
}

//Component usages
<cdr-input v-model="debounce"
  label="Enter hi"
  id="testing"
  placeholder="Enter hi"
  feedback
  :rules="[validateFn]"
  debounce
  data-backstop="text-input"
  ></cdr-input>
```

#### Normal multiline input

```
var multi = '';

<cdr-input v-model="multi"
      label="Multiline"
      multi-line
      ></cdr-input>
```
