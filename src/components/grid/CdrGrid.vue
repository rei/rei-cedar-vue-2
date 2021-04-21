<template>
  <component
    :is="tag"
    :class="mapClasses($style, baseClass, gutterClass)"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import mapClasses from '../../utils/mapClasses';
import propValidator from '../../utils/propValidator';

export default defineComponent({
  name: 'CdrGridTwo',
  props: {
    /**
     * Defines gutter size.
     * Possible values: {none, small, medium, large}.
     * Also accepts responsive values with `@breakpoint`: "none@md"
     */
    gutter: {
      type: String,
      validator: (value) => propValidator(
        value,
        ['none', 'small', 'medium', 'large'],
      ),
      default: 'medium@xs medium@sm large@md large@lg',
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  setup(props) {
    const baseClass = 'cdr-grid';
    // TODO: buildClass refactor
    const gutterClass = computed(() => props.gutter
      && props.gutter.split(' ').map((val) => `cdr-grid--gutter-${val}`).join(' '));

    return {
      mapClasses,
      baseClass,
      gutterClass,
    };
  },
});

</script>

<style lang="scss" module src="./styles/CdrGrid.scss">
</style>
