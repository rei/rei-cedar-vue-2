<template>
  <section :class="className">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'cdr-card',
    props: {
      className: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style>
</style>
