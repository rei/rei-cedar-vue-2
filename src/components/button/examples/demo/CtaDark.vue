<template>
  <div>
    <div class="button-example">
      <cdr-button
        modifier="cta dark"
        data-backstop="cdr-button--cta-dark"
        type="submit"
      >CTA-dark</cdr-button>
      <cdr-button
        modifier="cta dark"
        disabled
      >CTA-dark Disabled</cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="sm cta dark"
      >Small cta-dark</cdr-button>
      <cdr-button
        type="submit"
        modifier="xs cta dark"
      >Extra Small CTA-dark</cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'CtaDark',
  components: Components,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
