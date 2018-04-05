<template>
  <div>
    <div class="button-example">
      <cdr-button
        modifier="cta light"
        data-backstop="cdr-button--cta-light"
        type="submit"
      >CTA-light</cdr-button>
      <cdr-button
        modifier="cta light"
        disabled
      >CTA-light Disabled</cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="sm cta light"
      >Small cta-light</cdr-button>
      <cdr-button
        type="submit"
        modifier="xs cta light"
      >Extra Small CTA-light</cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'CtaLight',
  components: Components,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
