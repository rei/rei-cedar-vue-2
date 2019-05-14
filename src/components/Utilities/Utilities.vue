<template>
  <div>
    <container />

    <a11y />

    <align />

    <visibility />

    <inset />

  </div>
</template>

<script>
import a11y from 'componentsdir/Utilities/demos/a11y';
import visibility from 'componentsdir/Utilities/demos/visibility';
import align from 'componentsdir/Utilities/demos/align';
import inset from 'componentsdir/Utilities/demos/inset';
import container from 'componentsdir/Utilities/demos/container';

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
    inset,
    container,
  },
};
</script>

<style>
</style>
