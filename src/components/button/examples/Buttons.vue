<template>
  <div>
    <h2>Buttons</h2>
    <default-buttons/>
    <secondary-buttons/>
    <cta-buttons />
    <link-buttons/>
  </div>
</template>

<script>
import defaultButtons from './demo/Default';
import secondaryButtons from './demo/Secondary';
import linkButtons from './demo/Link';
import ctaButtons from './demo/Cta';

/*    ctaBrandButtons,
    ctaDarkButtons,
    ctaLightButtons,
    ctaSaleButtons,

    import ctaBrandButtons from './demo/CtaBrand';
import ctaDarkButtons from './demo/CtaDark';
import ctaLightButtons from './demo/CtaLight';
import ctaSaleButtons from './demo/CtaSale';
    */

export default {
  name: 'Buttons',
  components: {
    defaultButtons,
    secondaryButtons,
    ctaButtons,
    linkButtons,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>

