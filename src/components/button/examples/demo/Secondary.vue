<template>
  <div>
    <div class="button-example">
      <cdr-button
        modifier="secondary lg"
        data-backstop="cdr-button--secondary"
        type="submit"
      >Secondary Large</cdr-button>
      <cdr-button
        modifier="secondary lg"
        disabled
      >Secondary Disabled</cdr-button>
      <cdr-button
        modifier="secondary"
        type="submit"
      >Secondary Medium</cdr-button>
      <cdr-button
        modifier="secondary"
        type="submit">
        <cdr-icon
          url="/static/rei-icons.svg#cdr-check-lg"
          modifier="sm"/>
        Secondary Medium Icon
      </cdr-button>
      <cdr-button
        modifier="secondary sm"
        type="submit"
      >Secondary Small</cdr-button>
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
