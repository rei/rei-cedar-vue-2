<template>
  <div>
    <h2>Buttons</h2>
    <default-buttons/>
    <secondary-buttons/>
    <icon-buttons />
  </div>
</template>

<script>
import defaultButtons from './demo/Default';
import secondaryButtons from './demo/Secondary';
import iconButtons from './demo/Icons';

export default {
  name: 'Buttons',
  components: {
    defaultButtons,
    secondaryButtons,
    iconButtons,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>

