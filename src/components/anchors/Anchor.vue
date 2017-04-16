<template>
  <a :href="hypertextReference" :class="className">
    <slot></slot>
  </a>
</template>

<script>
  export default {
    name: 'cdr-anchor',
    props: {
      hypertextReference: {
        type: String,
        required: true,
      },
      className: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style>
</style>

