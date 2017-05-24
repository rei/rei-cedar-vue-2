<template>
  <div id="app" class="container-fluid">
    <h1>Cedar Proving grounds</h1>
    <icons data-backstop="icons"></icons>
    <headings></headings>
    <anchors data-backstop="anchors"></anchors>
    <buttons data-backstop="buttons"></buttons>
    <lists data-backstop="lists"></lists>
    <grid></grid>
    <test data-backstop="test"></test>
    <mountains></mountains>

  </div>
</template>

<script>
  import Components from './components/_index';
  import Directives from './directives/_index';
  // add examples
  import examples from './examples/_index';

  Object.keys(examples).forEach((key) => {
    Components[key] = examples[key];
  });
  // end add examples

  export default {
    name: 'app',
    components: Components,
    directives: Directives,
  };
</script>

<style scoped>
  
</style>
