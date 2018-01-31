<template>
  <div>
    <container/>

    <a11y/>

    <align/>

    <visibility/>

    <inline />

    <inset />

    <stack />

  </div>
</template>

<script>
import a11y from './demos/a11y';
import visibility from './demos/visibility';
import align from './demos/align';
import inline from './demos/inline';
import inset from './demos/inset';
import stack from './demos/stack';
import container from './demos/container';

export default {
  name: 'Utilities',
  components: {
    a11y,
    visibility,
    align,
    inline,
    inset,
    stack,
    container,
  },
};
</script>

<style>
</style>
