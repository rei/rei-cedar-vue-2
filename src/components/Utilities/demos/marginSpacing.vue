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
  name: 'MarginSpacingUtilities',
  components: {
    spacing,
  },
  data() {
    return {
      category: 'margin',
      types: ['mt', 'mr', 'mb', 'ml', 'mx', 'my'],
    };
  },
};
</script>

<style>
</style>
