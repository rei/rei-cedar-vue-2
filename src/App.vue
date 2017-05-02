<template>
  <div id="app" class="container-fluid">

    <icons></icons>
    <headings></headings>
    <anchors></anchors>
    <buttons></buttons>
    <cdr-list>
      <li>List unstyled</li>
      <li>List unstyled</li>
    </cdr-list>
    
    <cdr-list :modifier="['bulleted']">
      <li>List bulleted</li>
      <li>List bulleted</li>
      <cdr-list :modifier="['bulleted']">
        <li>List nested bulleted</li>
        <li>List nested bulleted</li>
      </cdr-list>
    </cdr-list>

    <cdr-list type="ol" :modifier="['numbered']">
      <li>List ordered - numbered</li>
      <li>List ordered - numbered</li>
    </cdr-list>

    <cdr-list :modifier="['menu']">
      <li><a href="/">List menu</a></li>
      <li><a href="/">List menu</a></li>
    </cdr-list>
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
