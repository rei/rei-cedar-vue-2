<template>
  <div id="app" class="container-fluid">
    <h1>Cedar Proving grounds</h1>

    <images></images>
    <icons data-backstop="icons"></icons>
    <headings data-backstop="headings"></headings>
    <anchors data-backstop="anchors"></anchors>
    <buttons data-backstop="buttons"></buttons>
    <lists data-backstop="lists"></lists>
    <mediaObject></mediaObject>
    <selects data-backstop="selects"></selects>
    <inputs data-backstop="inputs"></inputs>
    <grid></grid>
    <test data-backstop="test"></test>
    <mountains></mountains>

  </div>
</template>

<script>
  import Components from './components/_index';
  import Directives from './directives/_index';
  // add examples
  import examples from './components/examples';

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
