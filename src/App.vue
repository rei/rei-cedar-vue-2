<template>
  <div id="app">
    <cdr-card>
      <div data-backstop="test">This is a test!</div>
    </cdr-card>

    <cdr-button data-backstop="button">A default button</cdr-button>
    <cdr-button theme="red" data-backstop="button-red">A red button</cdr-button>
    <cdr-button theme="blue" data-backstop="button-blue">A blue button</cdr-button>

  </div>
</template>

<script>
  import Components from './components/_index';

  const prefix = 'cdr';
  Object.keys(Components).forEach((key) => {
    Components[key].name = `${prefix}-${Components[key].name}`;
    Components[`${prefix}${key}`] = Components[key];
    delete Components[key];
  });

  export default {
    name: 'app',
    components: Components,
  };
</script>
