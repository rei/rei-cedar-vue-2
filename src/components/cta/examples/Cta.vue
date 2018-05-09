<template>
  <div>
    <h2>CTA</h2>
    <div class="button-example">
      <cdr-cta>
        Default (brand)
      </cdr-cta>
      <cdr-cta
        cta-style="dark"
      >Dark
      </cdr-cta>
      <cdr-cta
        cta-style="light"
      >Light
      </cdr-cta>
      <cdr-cta
        cta-style="sale"
      >Sale
      </cdr-cta>
      <cdr-cta
        tag="a"
        cta-style="sale"
      >Link
      </cdr-cta>
    </div>
    <div class="button-example">
      <cdr-cta
        cta-style="dark"
        :full-width="true"
      >Full width
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
