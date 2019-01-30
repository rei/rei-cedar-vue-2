<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      Buttons
    </cdr-text>
    <default-buttons />
    <secondary-buttons />
    <icon-buttons />
  </div>
</template>

<script>
import CdrText from 'componentsdir/text/CdrText';
import defaultButtons from './demo/Default';
import secondaryButtons from './demo/Secondary';
import iconButtons from './demo/Icons';

export default {
  name: 'Buttons',
  components: {
    CdrText,
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
