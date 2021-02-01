<template>
  <svg v-bind="dataObj"
    :class="clsx($stylee[baseClass], $stylee[sizeClass], $stylee[inheritColorClass])"
  >
    <slot/>
    <use
      v-if="use"
      :href="use"
      :xlinkHref="use"
    />
  </svg>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import clsx from 'clsx';
import { buildClass } from '../../utils/buildClass';
import propValidator from '../../utils/propValidator';

export default defineComponent({
  name: 'CdrIcon',
  // mixins: [size],
  props: {
    /**
    * The href attribute passed to the use element. Will be prefixed with # automatically
    */
    use: String,
    /**
    * Sets icon fill to "inherit" so as to use parent/ancestor fill color.
    */
    inheritColor: Boolean,
    size: {
      type: String,
      default: 'medium',
      validator: (value) => propValidator(
        value,
        ['small', 'medium', 'large'],
      ),
    },
  },
  setup(props, ctx) {
    const baseClass = style['cdr-icon'];
    const hideSr = !ctx.attrs['aria-label'] && ! ctx.attrs['aria-labelledby']
    const inheritColorClass = computed(() => props.inheritColor && buildCLass(baseClass,'inherit-color'));
    const sizeClass = computed(() => props.size && buildClass('cdr-icon', props.size));
    return {
      baseClass,
      inheritColorClass,
      sizeClass,
      clsx,
      dataObj: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        'aria-hidden': hideSr,
      }
    }
  }
});
</script><style lang="scss" module src="./styles/CdrIcon.scss">
</style>
