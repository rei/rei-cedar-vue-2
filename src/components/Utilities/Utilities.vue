<template>
  <div>
    <container />

    <align />

    <visibility />

  </div>
</template>

<script>
import visibility from 'componentsdir/Utilities/demos/visibility';
import align from 'componentsdir/Utilities/demos/align';
import container from 'componentsdir/Utilities/demos/container';

/**
 * Cedar 2 component for utilities
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'Utilities',
  components: {
    visibility,
    align,
    container,
  },
};
</script>

<style>
</style>
