<template>
  <div>
    <cdr-text
      tag="h1"
      modifier="display-600 display-700@md display-900@lg"
    >
      Spacing classes
    </cdr-text>

    <inset />

    <spacing />

  </div>
</template>

<script>
import { CdrText } from 'srcdir/index';
import inset from 'componentsdir/Utilities/demos/inset';
import spacing from 'componentsdir/Utilities/demos/spacing';

export default {
  name: 'SpaceUtility',
  components: {
    CdrText,
    inset,
    spacing,
  },
};
</script>

<style>
</style>
