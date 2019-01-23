<template>
  <div data-backstop="align-utilities">
    <cdr-text
      tag="h2"
      modifier="heading-medium"
    >
      Align classes
    </cdr-text>

    <cdr-text class="cdr-text-left">
      .cdr-text-left
    </cdr-text>
    <cdr-text class="cdr-text-center">
      .cdr-text-center
    </cdr-text>
    <cdr-text class="cdr-text-right">
      .cdr-text-right
    </cdr-text>
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'UtilitiesAlign',
  components: { ...Components },
};
</script>

<style>

</style>
