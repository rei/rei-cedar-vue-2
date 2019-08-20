<template>
  <div data-backstop="cta-links">
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      CTA
    </cdr-text>
    <div class="button-example">
      <cdr-cta
        data-backstop="cdr-cta--dark"
      >
        Dark
      </cdr-cta>
      <cdr-cta
        href="https://rei.com"
        cta-style="brand"
        data-backstop="cdr-cta--brand"
      >Brand</cdr-cta>
      <cdr-cta
        href="https://rei.com"
        cta-style="light"
        data-backstop="cdr-cta--light"
      >Light</cdr-cta>
      <cdr-cta
        href="https://rei.com"
        cta-style="sale"
        data-backstop="cdr-cta--sale"
      >Sale</cdr-cta>
    </div>
    <div class="button-example">
      <cdr-cta
        cta-style="dark"
        href="https://rei.com"
        :full-width="true"
        data-backstop="cdr-cta--full-width"
      >Full width</cdr-cta>
    </div>
    <div class="button-example">
      <cdr-cta
        cta-style="dark"
        href="https://rei.com"
        full-width="xs lg"
        data-backstop="cdr-cta--full-width-at-xs"
      >Full width @ xs and lg</cdr-cta>
    </div>
    <div
      class="button-example"
      style="max-width: 300px;"
    >
      <cdr-cta
        data-backstop="cdr-cta--elevated"
        href="https://rei.com"
        cta-style="light"
        modifier="elevated"
      >
        This button has long text. It wraps!
      </cdr-cta>
    </div>
  </div>
</template>

<script>
// import Components from 'componentsdir/_index';
import { CdrText, CdrCta } from 'componentsdir/_index';

export default {
  name: 'Cta',
  components: {
    CdrCta,
    CdrText,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
