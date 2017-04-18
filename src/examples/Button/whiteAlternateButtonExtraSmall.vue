<template>
  <div class="cdr-stretch cdr-bg--dark-20">
    <cdr-button :modifier="['whiteAlternate', 'extraSmall']">White alternate large</cdr-button>
  </div>
</template>

<script>
  import cdrButtonExtraSmall from '../../components/buttons/Button';

  export default {
    name: 'white-alternate-example-extra-small',
    components: { cdrButtonExtraSmall },
  };
</script>
<style scoped>
  .cdr-stretch {
    padding: 20px;
  }
</style>
