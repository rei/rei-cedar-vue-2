<template>
  <div>
    <h2>
      Buttons
    </h2>

    <default-buttons />
    <secondary-buttons />
    <cta-buttons />
    <full-width />
    <icon-buttons />
  </div>
</template>

<script>
import defaultButtons from 'componentsdir/button/examples/demo/Default';
import secondaryButtons from 'componentsdir/button/examples/demo/Secondary';
import ctaButtons from 'componentsdir/button/examples/demo/CTA';
import iconButtons from 'componentsdir/button/examples/demo/Icons';
import fullWidth from 'componentsdir/button/examples/demo/FullWidth';

export default {
  name: 'Buttons',
  components: {
    defaultButtons,
    secondaryButtons,
    ctaButtons,
    iconButtons,
    fullWidth,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
