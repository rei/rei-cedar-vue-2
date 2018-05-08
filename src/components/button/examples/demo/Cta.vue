<template>
  <div>
    <div class="button-example">
      <h2>CTA</h2>
      <button-cta>
        Default (brand)
      </button-cta>
      <button-cta
        cta-style="dark"
      >Dark
      </button-cta>
      <button-cta
        cta-style="light"
      >Light
      </button-cta>
      <button-cta
        cta-style="sale"
      >Sale
      </button-cta>
      <button-cta
        tag="a"
        cta-style="sale"
      >Link
      </button-cta>
    </div>
    <div class="button-example">
      <button-cta
        cta-style="dark"
        :full-width="true"
      >Full width
      </button-cta>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import { ButtonCta } from 'componentsdir/button/dist/cdr-button';

export default {
  name: 'Cta',
  components: {
    Components,
    ButtonCta,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
