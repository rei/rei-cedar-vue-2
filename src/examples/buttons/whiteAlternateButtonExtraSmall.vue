<template>
  <div class="cdr-stretch cdr-bg--dark-20">
    <cdr-button :modifier="['secondary-alternate', 'extra-small']">White alternate extra small</cdr-button>
  </div>
</template>

<script>
  import cdrButton from '../../components/buttons/Button';

  export default {
    name: 'white-alternate-example-extra-small',
    components: { cdrButton },
  };
</script>
<style scoped>
  .cdr-stretch {
    padding: 20px;
  }
</style>
