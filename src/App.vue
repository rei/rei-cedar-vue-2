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
  import grid from './examples/grid/Grid';
  import test from './examples/testing/Test';

  const prefix = 'cdr';
  Object.keys(Components).forEach((key) => {
    Components[key].name = `${prefix}-${Components[key].name}`;
    Components[`${prefix}${key}`] = Components[key];
    delete Components[key];
  });

  Components.grid = grid;
  Components.test = test;

  export default {
    name: 'app',
    components: Components,
  };
</script>

<style>

</style>
