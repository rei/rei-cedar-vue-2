<template>
  <div>
    <a11y/>

    <align/>

    <visibility/>
  </div>
</template>

<script>
import a11y from './demos/a11y';
import visibility from './demos/visibility';
import align from './demos/align';

export default {
  name: 'Utilities',
  components: {
    a11y,
    visibility,
    align,
  },
};
</script>

<style>
</style>
