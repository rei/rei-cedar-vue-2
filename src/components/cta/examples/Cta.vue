<template>
  <div data-backstop="cta-links">
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
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
      >Full width boolean</cdr-cta>
    </div>
    <div class="button-example">
      <cdr-cta
        cta-style="dark"
        href="https://rei.com"
        full-width="@xs @lg"
        data-backstop="cdr-cta--full-width-responsive"
      >Full width @xs @lg</cdr-cta>
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
import * as Components from 'srcdir/index';

export default {
  name: 'Cta',
  components: {
    ...Components,
  },
};
</script>

<style>
/* TODO: example styles not getting parsed? */
  .button-example {
    padding: 10px;
  }
</style>
