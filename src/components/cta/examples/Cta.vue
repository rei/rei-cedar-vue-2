<template>
  <div>
    <h2>CTA</h2>
    <div class="button-example">
      <cdr-cta
        data-backstop="cdr-cta--dark">
        Default (dark)
      </cdr-cta>
      <cdr-cta
        href="https://rei.com"
        cta-style="brand"
        data-backstop="cdr-cta--brand"
      >Brand</cdr-cta
      >
      <cdr-cta
        href="https://rei.com"
        cta-style="light"
        data-backstop="cdr-cta--light"
      >Light</cdr-cta
      >
      <cdr-cta
        href="https://rei.com"
        cta-style="sale"
        data-backstop="cdr-cta--sale"
        modifier="elevated"
      >Sale (elevated)</cdr-cta
      >
    </div>
    <div class="button-example">
      <cdr-cta
        cta-style="dark"
        :full-width="true"
        data-backstop="cdr-cta--dark full-width"
      >Full width</cdr-cta
      >
    </div>
    <div
      class="button-example"
      style="max-width: 300px">
      <cdr-cta>
        This button has long text. It wraps!
      </cdr-cta>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Cta',
  components: Components,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
