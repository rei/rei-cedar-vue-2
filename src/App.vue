<template>
  <div id="app" class="container-fluid">
    <h1>Cedar Proving grounds</h1>
    
    <images></images>
    <icons data-backstop="icons"></icons>
    <headings></headings>
    <anchors data-backstop="anchors"></anchors>
    <buttons data-backstop="buttons"></buttons>
    <lists data-backstop="lists"></lists>
    <grid></grid>
    <test data-backstop="test"></test>

  </div>
</template>

<script>
  import Components from './components/_index';
  // add examples
  import examples from './examples/_index';

  Object.keys(examples).forEach((key) => {
    Components[key] = examples[key];
  });
  // end add examples

  export default {
    name: 'app',
    components: Components,
  };
</script>

<style>

</style>
