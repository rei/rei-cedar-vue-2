<template>
  <div>
    <h2>Buttons</h2>
    <default-buttons/>
    <secondary-buttons/>
    <cta-brand-buttons/>
    <cta-dark-buttons/>
    <cta-light-buttons/>
    <cta-sale-buttons/>
    <link-buttons/>
  </div>
</template>

<script>
import defaultButtons from './demo/Default';
import secondaryButtons from './demo/Secondary';
import ctaBrandButtons from './demo/CtaBrand';
import ctaDarkButtons from './demo/CtaDark';
import ctaLightButtons from './demo/CtaLight';
import ctaSaleButtons from './demo/CtaSale';
import linkButtons from './demo/Link';


export default {
  name: 'Buttons',
  components: {
    defaultButtons,
    secondaryButtons,
    ctaBrandButtons,
    ctaDarkButtons,
    ctaLightButtons,
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

