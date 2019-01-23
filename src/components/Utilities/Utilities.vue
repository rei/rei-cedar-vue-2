<template>
  <div>
    <container />

    <a11y />

    <align />

    <visibility />

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

/**
 * Cedar 2 component for utilities
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
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
