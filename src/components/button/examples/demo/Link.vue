<template>
  <div>
    <h3>Buttons with link styles</h3>
    <p>
      <cdr-button
        tag="a"
        href="https://google.com"
        :style-modifiers="['secondary']"
      >This is a button-link
      </cdr-button>
    </p>
    <p>
      <cdr-button
        tag="a"
        data-backstop="cdr-button--link-standalone"
        :style-modifiers="['cta-sale']"
      >Button as link--standalone
      </cdr-button>
    </p>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'LinkButtons',
  components: Components,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
