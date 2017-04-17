<template>
  <div id="app" class="container-fluid">
    <cdr-heading :level="1" class="test">Heading</cdr-heading>
    <cdr-heading :level="1" :appearance="2">Heading</cdr-heading>
    <cdr-heading :level="1" :appearance="3">Heading</cdr-heading>
    <cdr-heading :level="1" :appearance="4">Heading</cdr-heading>
    <cdr-heading :level="1" :appearance="5">Heading</cdr-heading>
    <cdr-heading :level="1" :appearance="6">Heading</cdr-heading>
    <cdr-heading :level="2" :appearance="1">Heading 2</cdr-heading>
    <cdr-heading :level="2" :appearance="2">Heading 2</cdr-heading>
    <cdr-heading :level="2" :appearance="3">Heading 2</cdr-heading>
    <cdr-heading :level="2" :appearance="4">Heading 2</cdr-heading>
    <cdr-heading :level="2" :appearance="5">Heading 2</cdr-heading>
    <cdr-heading :level="2" :appearance="6">Heading 2</cdr-heading>
    <test data-backstop="test"></test>

    <cdr-card className="cdr-card">
      <cdr-anchor data-backstop="cdr-link" hypertextReference="#" className="cdr-link">
          An example link
      </cdr-anchor>
    </cdr-card>
    <cdr-card className="cdr-card cdr-bg--dark-20">
      <cdr-anchor data-backstop="cdr-link" hypertextReference="#" className="cdr-link cdr-link--contrast">
          An example contrast link
      </cdr-anchor>
    </cdr-card>
    <cdr-card className="cdr-card cdr-bg--dark-20">
      <cdr-anchor data-backstop="cdr-link--standalone" hypertextReference="#" className="cdr-link cdr-link--overlay">
          An example overlay link
      </cdr-anchor>
    </cdr-card>
    <cdr-card className="cdr-card">
      <cdr-anchor data-backstop="cdr-link--standalone" hypertextReference="#" className="cdr-link cdr-link--standalone">
          An example standalone link
      </cdr-anchor>
    </cdr-card>

    <cdr-card className="cdr-card">
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
