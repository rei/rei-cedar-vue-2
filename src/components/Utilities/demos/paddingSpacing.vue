<template>
  <div>
    <spacing
      :category="category"
      :types="types"
    />

  </div>
</template>

<script>
import spacing from 'componentsdir/Utilities/demos/spacing';

export default {
  name: 'PaddingSpacingUtilities',
  components: {
    spacing,
  },
  data() {
    return {
      category: 'padding',
      types: ['pt', 'pr', 'pb', 'pl', 'px', 'py'],
    };
  },
};
</script>

<style>
</style>
