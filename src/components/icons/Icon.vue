<template>
  <svg class="cdr-icon" aria-hidden="true">
    <use :xlink:href="url"></use>
  </svg>
</template>


<script>
export default {
  name: 'cdr-icon',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

