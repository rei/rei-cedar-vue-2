<template>
  <component
    :is="tag"
    :class="[$style[baseClass], $style[gutterClass]]"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
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
    const baseClass = 'cdr-grid-two';
    // TODO: buildClass refactor
    const gutterClass = computed(() => props.gutter
      && props.gutter.split(' ').map((val) => `cdr-grid-two--gutter-${val}`).join(' '));

    return {

      baseClass,
      gutterClass,
    };
  },
});

</script>

<style lang="scss" module src="./styles/CdrGridTwo.scss">
</style>
