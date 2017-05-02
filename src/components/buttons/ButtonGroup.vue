<template>
  <section class="cdr-button-group" :class="className">
    <slot></slot>
  </section>
</template>

<script>
  export default {
    name: 'cdr-button-group',
    props: {
      className: {
        required: false,
        type: String,
      },
    },
};
</script>

<style>
</style>
