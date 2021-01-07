<template>
  <svg v-bind="dataObj"
    :class="componentClass"
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
import style from './styles/CdrIcon.scss';

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
    console.log(clsx, 'TOOOOOOOO')
    const baseClass = style['cdr-icon'];
    const hideSr = !ctx.attrs['aria-label'] && ! ctx.attrs['aria-labelledby']
    const inheritColorClass = computed(() => props.inheritColor && style['cdr-icon--inherit-color']);
    const sizeClass = computed(() => props.size && buildClass('cdr-icon', props.size, style));
    const componentClass = computed(() => clsx(baseClass, sizeClass.value, inheritColorClass.value))
    return {
      componentClass,
      use: props.use,
      dataObj: {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        'aria-hidden': hideSr,
      }
    }
  }
});
</script>
