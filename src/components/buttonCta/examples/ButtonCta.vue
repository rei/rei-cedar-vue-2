<template>
  <div>
    <h2>CTA Buttons</h2>
    <cdr-button-cta
      type="button"
    >CTA Brand
    </cdr-button-cta>
    <cdr-button-cta
      type="submit"
      cta-style="dark"
    >CTA Dark
    </cdr-button-cta>
    <cdr-button-cta
      type="reset"
      cta-style="light"
    >CTA Light
    </cdr-button-cta>
    <cdr-button-cta
      type="button"
      cta-style="sale"
    >CTA Sale
    </cdr-button-cta>
    <cdr-button-cta
      tag="a"
    >CTA Sale
    </cdr-button-cta>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'CtaButtons',
  components: Components,
};
</script>

<style>
</style>
