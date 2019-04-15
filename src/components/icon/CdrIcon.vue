<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :class="[sizeClass, inheritColorClass, space]"
    role="presentation"
  >
    <!-- @slot any valid svg xml -->
    <slot />
    <use
      v-if="use"
      :href="`${use}`"
      :xlink:href="`${use}`"
    />
  </svg>
</template>

<script>
/**
 * Cedar 2 component for icons
 * This component is lower level. Each icon can also be consumed individually via their own component. See sticker sheet for icon names.
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 * <span class="modifiers">inherit-color</span>
 * {standalone}
 */

import size from 'mixinsdir/size';
import space from 'mixinsdir/space';

export default {
  name: 'CdrIcon',
  mixins: [size, space],
  props: {
    /**
    * The href attribute passed to the use element. Will be prefixed with # automatically
    */
    use: String,
    /**
    * Sets icon fill to "inherit" so as to use parent/ancestor fill color.
    */
    inheritColor: Boolean,
  },
  computed: {
    baseClass() {
      return 'cdr-icon';
    },
    inheritColorClass() {
      return this.inheritColor ? this.$style['cdr-icon--inherit-color'] : '';
    },

  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrIcon.pcss';
</style>
