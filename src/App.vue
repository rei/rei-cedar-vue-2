<template>
  <div id="app" class="container-fluid">
    <h1>Cedar Proving grounds</h1>

    <anchors data-backstop="anchors"></anchors>
    <buttons data-backstop="buttons"></buttons>
    <cards></cards>
    <card-content></card-content>
    <checkboxes data-backstop="checkboxes"></checkboxes>
    <grid></grid>
    <headings data-backstop="headings"></headings>
    <icons data-backstop="icons"></icons>
    <images></images>
    <inputs data-backstop="inputs"></inputs>
    <lists data-backstop="lists"></lists>
    <mediaObject></mediaObject>
    <mountains></mountains>
    <radios data-backstop="radios"></radios>
    <selects data-backstop="selects"></selects>
    <test data-backstop="test"></test>
  </div>
</template>

<script>
  import * as components from './components/_index';
  import * as directives from './directives/_index';
  // add examples
  import examples from './components/examples';

  Object.keys(examples).forEach((key) => {
    components[key] = examples[key];
  });
  // end add examples

  export default {
    name: 'app',
    components,
    directives,
  };
</script>

<style scoped>

</style>
