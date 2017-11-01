<template>
  <div>
    <h3>Buttons with link styles</h3>
    <p><cdr-button modifier="link">Button as link</cdr-button></p>
    <p><cdr-button data-backstop="cdr-button--link-standalone" modifier="link standalone">Button as link--standalone</cdr-button></p>
  </div>
</template>

<script>
import Components from 'Components/_index';

export default {
  name: 'link-buttons',
  components: Components,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
