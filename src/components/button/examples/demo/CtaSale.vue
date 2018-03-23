<template>
  <div>
    <div class="button-example">
      <cdr-button
        modifier="cta-sale"
        data-backstop="cdr-button--cta-sale"
        type="submit"
      >CTA-sale</cdr-button>
      <cdr-button
        modifier="cta-sale"
        disabled
      >CTA-sale Disabled</cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="sm cta-sale"
      >Small cta-sale</cdr-button>
      <cdr-button
        type="submit"
        modifier="xs cta-sale"
      >Extra Small CTA-sale</cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'CtaSale',
  components: Components,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
