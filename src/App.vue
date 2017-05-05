<template>
  <div id="app" class="container-fluid">

    <icons></icons>
    <headings></headings>
    <anchors></anchors>
    <buttons></buttons>
    <cdr-list data-backstop="cdr-list--bulleted">
      <li>List default</li>
      <li>List default
        <cdr-list>
          <li>List default - nested</li>
          <li>List default - nested
            <cdr-list :modifier="['numbered']">
              <li>List default - nested - numbered</li>
              <li>List default - nested - numbered</li>
            </cdr-list>
          </li>
        </cdr-list>
      </li>
    </cdr-list>

    <cdr-list type="ol" data-backstop="cdr-list--numbered">
      <li>List ordered - default</li>
      <li>List ordered - default
        <cdr-list type="ol" :modifier="['bulleted']">
          <li>List ordered - nested - bulleted</li>
          <li>List ordered - nested - bulleted</li>
        </cdr-list>
        </li>
    </cdr-list>

    <cdr-list :modifier="['unstyled']" data-backstop="cdr-list--unstyled">
      <li>List unstyled</li>
      <li>List unstyled</li>
    </cdr-list>

    <cdr-list :modifier="['menu']" data-backstop="cdr-list--menu">
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
