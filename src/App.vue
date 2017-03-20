<template>
  <div id="app">
    <div data-backstop="test">This is a test</div>

    <div data-backstop="button">
      <cdr-button>A default button</cdr-button>
    </div>
    <div data-backstop="button-red">
      <cdr-button theme="red">A red button</cdr-button>
    </div>
    <div data-backstop="button-blue">
      <cdr-button theme="blue">A blue button</cdr-button>
    </div>

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
