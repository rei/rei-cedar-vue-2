<template>
  <div id="app">
  
    <div data-backstop="test">This is a test</div>

    <cdr-button data-backstop="button">A default button</cdr-button>
    <cdr-button theme="red" data-backstop="button-red">A red button</cdr-button>
    <cdr-button theme="blue" data-backstop="button-blue">A blue button</cdr-button>

  </div>
</template>

<script>
import cdrButton from './components/button/button';

export default {
  name: 'app',
  components: {
    cdrButton
  }
}
</script>
