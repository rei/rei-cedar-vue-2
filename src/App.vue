<template>
  <div id="app" class="container-fluid">
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
  // end extra


  // add prefix to components
  const prefix = 'cdr';
  Object.keys(Components).forEach((key) => {
    Components[key].name = `${prefix}-${Components[key].name}`;
    Components[`${prefix}${key}`] = Components[key];
    delete Components[key];
  });

// add the extra things for testing
  Components.test = test;
  Components.grid = grid;
// end add extra

  export default {
    name: 'app',
    components: Components,
  };
</script>

<style>

</style>
