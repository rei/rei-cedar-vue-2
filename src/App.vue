<template>
  <div id="app" class="container-fluid">
    <cdr-heading :level="3">Heading</cdr-heading>
    <test data-backstop="test"></test>
    <cdr-card>
      <cdr-button data-backstop="button">A default button</cdr-button>
      <cdr-button theme="red" data-backstop="button-red">A red button</cdr-button>
      <cdr-button theme="blue" data-backstop="button-blue">A blue button</cdr-button>
    </cdr-card>

    <grid></grid>
  </div>
</template>

<script>
  import Components from './components/_index';
  // extra stuff for testing
  import test from './examples/testing/Test';
  import grid from './examples/grid/Grid';

  Components.test = test;
  Components.grid = grid;
  // end extra


  export default {
    name: 'app',
    components: Components,
  };
</script>

<style>

</style>
