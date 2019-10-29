<template>
  <div>
    <container />

    <align />

    <visibility />

    <inset />

    <paddingSpacing />

    <marginSpacing />


  </div>
</template>

<script>
import visibility from 'componentsdir/Utilities/demos/visibility';
import align from 'componentsdir/Utilities/demos/align';
import container from 'componentsdir/Utilities/demos/container';
import inset from 'componentsdir/Utilities/demos/inset';
import marginSpacing from 'componentsdir/Utilities/demos/marginSpacing';
import paddingSpacing from 'componentsdir/Utilities/demos/paddingSpacing';

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
    inset,
    marginSpacing,
    paddingSpacing,
  },
};
</script>

<style>
</style>
