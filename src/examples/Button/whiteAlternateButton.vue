<template>
  <div class="cdr-stretch cdr-bg--dark-20">
    <cdr-button :modifier="['whiteAlternate']">White alternate large</cdr-button>
  </div>
</template>

<script>
  import cdrButton from '../../components/buttons/Button';

  export default {
    name: 'white-alternate-example',
    components: { cdrButton },
  };
</script>
<style scoped>
  .cdr-stretch {
    padding: 20px;
  }
</style>
