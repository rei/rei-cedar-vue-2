<template>
  <div>
    <h2>Forms</h2>

    <cdr-input v-model="test" 
      name="input-1"
      label="Feedback + not required"
      id="testing"
      placeholder="hi"
      feedback
      :rules="[validateFn]"
      ></cdr-input>

    <cdr-input v-model="test2" 
      name="input-2"
      label="Feedback + required"
      feedback
      :rules="[validateFn]"
      required
      ></cdr-input>

    <cdr-input v-model="test3" 
      name="input-3"
      label="No validation"
      feedback
      ></cdr-input>

    <cdr-input v-model="test4" 
      name="input-4"
      label="Textarea"
      multi-line
      ></cdr-input>
  </div>
</template>

<script>
  import Components from '../../components/_index';

  export default {
    name: 'forms',
    components: Components,
    data() {
      return {
        test: '',
        test2: '',
        test3: '',
        test4: '',
      };
    },
    methods: {
      validateFn(inputText) {
        const obj = {};
        if (inputText === 'hi') {
          obj.state = 'valid';
        } else if (inputText === '') {
          obj.state = 'warn';
          obj.message = 'Warning: empty';
        } else if (!isNaN(inputText) && inputText !== '') {
          obj.state = 'error';
          obj.message = 'Error: needs to be string';
        } else {
          obj.state = 'error';
          obj.message = 'Error: WRONG';
        }
        return obj;
      },
    },
  };
</script>
