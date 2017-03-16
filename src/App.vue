<template>
  <div id="app">
    <cdr-button>A default button</cdr-button>
    <cdr-button theme="red">A red button</cdr-button>
    <cdr-button theme="blue">A blue button</cdr-button>

  </div>
</template>

<script>
import cdrButton from './components/button';

export default {
  name: 'app',
  components: {
    cdrButton
  }
}
</script>
