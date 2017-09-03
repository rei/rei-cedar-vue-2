<template>
  <div id="app" class="container-fluid">
    <h1>Cedar Proving grounds</h1>

    <anchors data-backstop="anchors"></anchors>
    <buttons data-backstop="buttons"></buttons>
    <cards></cards>
    <card-content></card-content>
    <activity></activity>
    <checkboxes data-backstop="checkboxes"></checkboxes>
    <grid></grid>
    <headings data-backstop="headings"></headings>
    <icons data-backstop="icons"></icons>
    <images></images>
    <searchbox data-backstop="search"></searchbox>
    <inputs data-backstop="inputs"></inputs>
    <lists data-backstop="lists"></lists>
    <mediaObject></mediaObject>
    <mountains></mountains>
    <radios data-backstop="radios"></radios>
    <ratings data-backstop="ratings"></ratings>
    <selects data-backstop="selects"></selects>
    <test data-backstop="test"></test>
  </div>
</template>

<script>
  import examples from './components/examples';
  import compexamples from './compositions/examples';

  const all = Object.assign(examples, compexamples);

  export default {
    name: 'app',
    components: all,
  };
</script>

<style scoped>

</style>
