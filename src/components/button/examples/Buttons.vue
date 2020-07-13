<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Buttons
    </cdr-text>

    <default-buttons />
    <secondary-buttons />
    <cta-buttons />
    <full-width />
    <icon-buttons />
  </div>
</template>

<script>
import { CdrText } from 'srcdir/index';
import defaultButtons from 'componentsdir/button/examples/demo/Default';
import secondaryButtons from 'componentsdir/button/examples/demo/Secondary';
import ctaButtons from 'componentsdir/button/examples/demo/CTA';
import iconButtons from 'componentsdir/button/examples/demo/Icons';
import fullWidth from 'componentsdir/button/examples/demo/FullWidth';

export default {
  name: 'Buttons',
  components: {
    CdrText,
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
