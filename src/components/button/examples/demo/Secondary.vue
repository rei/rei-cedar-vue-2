<template>
  <div>
    <div class="button-example">
      <cdr-button
        modifier="secondary"
        data-backstop="cdr-button--secondary"
        type="submit"
      >Secondary</cdr-button>
      <cdr-button
        modifier="secondary"
        disabled
      >Secondary Disabled</cdr-button>
    </div>
    <div class="button-example">
      <cdr-button
        type="submit"
        modifier="sm secondary"
      >Small secondary</cdr-button>
      <cdr-button
        type="submit"
        modifier="xs secondary"
      >Extra Small secondary</cdr-button>
    </div>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Secondary',
  components: Components,
};
</script>

<style>
  .button-example {
    padding: 10px;
  }
</style>
