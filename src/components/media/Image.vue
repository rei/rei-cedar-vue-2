<template>
  <div class="cdr-media-frame">
    <img class="cdr-media-frame__image" :src="src" :alt="alt">
  </div>
</template>

<script>
export default {
  name: 'cdr-img',
  props: {
    src: String,
    alt: String,
  },
};
</script>
