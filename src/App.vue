<template>
  <div id="app" class="container-fluid">
    <h1>Cedar Proving grounds</h1>

    <anchors data-backstop="anchors"></anchors>
    <buttons data-backstop="buttons"></buttons>
    <checkboxes data-backstop="checkboxes"></checkboxes>
    <headings data-backstop="headings"></headings>
    <icons data-backstop="icons"></icons>
    <images></images>
    <inputs data-backstop="inputs"></inputs>
    <lists data-backstop="lists"></lists>
    <mediaObject></mediaObject>
    <mountains></mountains>
    <radios data-backstop="radios"></radios>
    <selects data-backstop="selects"></selects>
    <grid></grid>
    <test data-backstop="test"></test>

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
