<template>
  <div data-backstop="buttons">
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      Buttons
    </cdr-text>
    <default-buttons />
    <responsive />
    <secondary-buttons />
    <icon-buttons />
  </div>
</template>

<script>
import CdrText from 'componentsdir/text/CdrText';
import defaultButtons from 'componentsdir/button/examples/demo/Default';
import secondaryButtons from 'componentsdir/button/examples/demo/Secondary';
import iconButtons from 'componentsdir/button/examples/demo/Icons';
import responsive from 'componentsdir/button/examples/demo/Responsive';

export default {
  name: 'Buttons',
  components: {
    CdrText,
    defaultButtons,
    secondaryButtons,
    iconButtons,
    responsive,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
