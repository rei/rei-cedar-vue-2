<template>
  <div>
    <cdr-text
      tag="h1"
      modifier="heading-large"
    >
      Spacing classes
    </cdr-text>

    <inset />

    <spacing />

  </div>
</template>

<script>
import { CdrText } from 'componentsdir/_index';
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