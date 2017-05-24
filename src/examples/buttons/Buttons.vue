<template>
  <div>
    <h2>Buttons</h2>
    <default-buttons></default-buttons>
    <secondary-buttons></secondary-buttons>
    <black-buttons></black-buttons>
    <white-buttons></white-buttons>
    <link-buttons></link-buttons>
  </div>
</template>

<script>
import defaultButtons from './demo/Default';
import secondaryButtons from './demo/Secondary';
import blackButtons from './demo/Black';
import whiteButtons from './demo/White';
import linkButtons from './demo/Link';

export default {
  name: 'buttons',
  components: {
    defaultButtons,
    secondaryButtons,
    blackButtons,
    whiteButtons,
    linkButtons,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>

