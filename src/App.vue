<template>
  <div id="app" class="container-fluid">
    <test data-backstop="test"></test>
    <cdr-card>
      <cdr-button data-backstop="button">A default button</cdr-button>
      <cdr-button theme="red" data-backstop="button-red">A red button</cdr-button>
      <cdr-button theme="blue" data-backstop="button-blue">A blue button</cdr-button>
    </cdr-card>
    
    <cdr-row :cols="4">
      <cdr-col>
        <cdr-card>Testing</cdr-card>
      </cdr-col>
      <cdr-col>
        <cdr-card>Testing 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut sapiente, reprehenderit sint quod laudantium optio voluptatum soluta similique nihil molestias, pariatur qui a, nisi veritatis excepturi incidunt, accusantium exercitationem non.</cdr-card>
      </cdr-col>
      <cdr-col>
        <cdr-card>Testing 3</cdr-card>
      </cdr-col>
      <cdr-col>
        <cdr-card>Testing 4</cdr-card>
      </cdr-col>
    </cdr-row>

  </div>
</template>

<script>
  import Components from './components/_index';
  import test from './examples/testing/Test';

  const prefix = 'cdr';
  Object.keys(Components).forEach((key) => {
    Components[key].name = `${prefix}-${Components[key].name}`;
    Components[`${prefix}${key}`] = Components[key];
    delete Components[key];
  });

  Components.test = test;

  export default {
    name: 'app',
    components: Components,
  };
</script>

<style>

</style>
