<template>
  <div>
    <h2>Forms</h2>

    <cdr-input v-model="test" 
      name="input-1"
      label="Input Label"
      id="testing"
      feedback
      :rules="[validateFn]"
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
      };
    },
    methods: {
      validateFn(inputText) {
        if (inputText === 'hi') {
          return true;
        } else if (!isNaN(inputText)) {
          return 'Error: needs to be string';
        }
        return null;
      },
    },
  };
</script>
