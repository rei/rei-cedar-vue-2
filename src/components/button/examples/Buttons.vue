<template>
  <div>
    <h2>Buttons</h2>
    <default-buttons/>
    <secondary-buttons/>
    <cta-sale-buttons/>
    <link-buttons/>
  </div>
</template>

<script>
import defaultButtons from './demo/Default';
import secondaryButtons from './demo/Secondary';
import ctaSaleButtons from './demo/CtaSale';
import linkButtons from './demo/Link';


export default {
  name: 'Buttons',
  components: {
    defaultButtons,
    secondaryButtons,
    ctaSaleButtons,
    linkButtons,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>

