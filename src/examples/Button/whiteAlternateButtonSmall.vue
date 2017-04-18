<template>
  <div class="cdr-stretch cdr-bg--dark-20">
    <cdr-button :modifier="['whiteAlternate', 'small']">White alternate large</cdr-button>
  </div>
</template>

<script>
  import cdrButtonSmall from '../../components/buttons/Button';

  export default {
    name: 'white-alternate-example-small',
    components: { cdrButtonSmall },
  };
</script>
<style scoped>
  .cdr-stretch {
    padding: 20px;
  }
</style>
