<template>
  <div>
    <div class="button-example">
      <cdr-button
        modifier="cta brand"
        data-backstop="cdr-button--cta-brand"
        type="submit"
      >Medium CTA-brand</cdr-button>
      <cdr-button
        modifier="cta brand"
        disabled
      >CTA-brand Disabled</cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="lg cta brand"
      >Large cta-brand</cdr-button>
      <cdr-button
        type="submit"
        modifier="sm cta brand"
      >Small CTA-brand</cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'CtaBrand',
  components: Components,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
