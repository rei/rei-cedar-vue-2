<template>
  <div id="app" class="cdr-container-fluid">
    <h1>Cedar Proving grounds</h1>

    <anchors class="cpg-section" data-backstop="anchors"></anchors>
    <buttons class="cpg-section" data-backstop="buttons"></buttons>
    <cards class="cpg-section"></cards>
    <!-- <card-content class="cpg-section"></card-content> -->
    <activity class="cpg-section"></activity>
    <checkboxes class="cpg-section" data-backstop="checkboxes"></checkboxes>
    <grid class="cpg-section"></grid>
    <headings class="cpg-section" data-backstop="headings"></headings>
    <icons class="cpg-section" data-backstop="icons"></icons>
    <images class="cpg-section"></images>
    <searchbox class="cpg-section" data-backstop="search"></searchbox>
    <inputs class="cpg-section" data-backstop="inputs"></inputs>
    <lists class="cpg-section" data-backstop="lists"></lists>
    <mediaObject class="cpg-section"></mediaObject>
    <mountains class="cpg-section"></mountains>
    <radios class="cpg-section" data-backstop="radios"></radios>
    <ratings class="cpg-section" data-backstop="ratings"></ratings>
    <selects class="cpg-section" data-backstop="selects"></selects>
    <test class="cpg-section" data-backstop="test"></test>
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
  .cpg-section {
    margin: 16px 0;
  }
</style>
