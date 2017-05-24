<template>
  <div id="app" class="container-fluid">
    <h1>Cedar Proving grounds</h1>
    <div class="test" v-mountain-shape.top.left></div>
    <div class="test" v-mountain-shape.top.right></div>
    <div class="test" v-mountain-shape.top.center></div>
    <div class="test" v-mountain-shape.bottom.center></div>
    <div class="test" v-mountain-shape.bottom.left></div>
    <div class="test" v-mountain-shape.bottom.right></div>
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
  .test {
    background-color: lightgray;
    margin-top: 4rem;
    height: 50px;
    padding: 10px;
  }
</style>
