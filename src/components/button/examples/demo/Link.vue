<template>
  <div class="button-example">
    <h3>Anchors as buttons</h3>
    <cdr-button
      tag="a"
      href="https://google.com"
      style-modifiers="secondary"
    >This is a button-link
    </cdr-button>

    <button-cta
      tag="a"
      data-backstop="cdr-button--link-standalone"
      cta-style="sale"
    >Button as link--standalone
    </button-cta>
  </div>
</template>

<script>
// import Components from 'componentsdir/_index';
import { CdrButton, ButtonCta } from 'componentsdir/button/dist/cdr-button';

export default {
  name: 'LinkButtons',
  components: {
    CdrButton,
    ButtonCta,
  },
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
