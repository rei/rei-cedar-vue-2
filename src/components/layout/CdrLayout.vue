<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div
    :class="[
      $style['cdr-layout'],
      directionClass,
      spaceClass,
    ]"
  >
    <slot />
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import propValidator from 'srcdir/utils/propValidator';

export default {
  name: 'CdrLayout',
  mixins: [modifier],
  props: {
    direction: {
      type: String,
      default: 'inline',
      validator: value => propValidator(
        value,
        ['inline', 'stack'],
      ),
    },
    spacing: {
      type: String,
    },
  },
  computed: {
    directionClass() {
      const classStr = [];

      if (this.direction) {
        this.direction.split(' ').forEach((val) => {
          classStr.push(this.$style[`cdr-layout--${val}`]);
        });
      }

      return classStr.join(' ');
    },
    spaceClass() {
      const classStr = [];

      if (this.spacing) {
        this.spacing.split(' ').forEach((val) => {
          classStr.push(this.$style[`cdr-layout--space-${val}`]);
        });
      }

      return classStr.join(' ');
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrLayout.pcss';
</style>
